import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pageRouteMap } from '../routes.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import usePageInteractions from '../hooks/usePageInteractions.js';

// 将原始 HTML 内容转换为 React 可渲染的结构，保留原页面文案与样式。
const PageRenderer = ({ html }) => {
  const containerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const pageParts = useMemo(() => parseHtml(html), [html]);

  usePageMeta(pageParts.title, pageParts.description);
  usePageInteractions(containerRef, location.hash, navigate);
  useEffect(() => {
    document.documentElement.lang = location.pathname.startsWith('/en') ? 'en' : 'zh-CN';
  }, [location.pathname]);

  return (
    <div className="page-shell" ref={containerRef}>
      {pageParts.style ? <style>{pageParts.style}</style> : null}
      <div dangerouslySetInnerHTML={{ __html: pageParts.body }} />
    </div>
  );
};

const parseHtml = (html) => {
  const title = extractTitle(html);
  const description = extractDescription(html);
  const style = extractStyle(html);
  const body = extractBody(html);
  const sanitizedBody = stripScripts(body);
  const rewrittenBody = rewriteSources(rewriteLinks(sanitizedBody));

  return {
    title,
    description,
    style,
    body: rewrittenBody
  };
};

const extractTitle = (html) => {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : 'MeFlow Agent';
};

const extractDescription = (html) => {
  const match = html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"\s*\/?>/i);
  return match ? match[1].trim() : 'MeFlow Agent - AI原生合同生命周期管理平台';
};

const extractStyle = (html) => {
  const matches = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
  if (!matches.length) {
    return '';
  }

  return matches.map((match) => match[1].trim()).join('\n\n');
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1].trim() : html;
};

const stripScripts = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, '');

const rewriteLinks = (html) =>
  html.replace(/href=("|')([^"']+)("|')/gi, (full, quoteStart, href, quoteEnd) => {
    const normalized = normalizeHref(href);
    return `href=${quoteStart}${normalized}${quoteEnd}`;
  });

const rewriteSources = (html) =>
  html.replace(/src=("|')([^"']+)("|')/gi, (full, quoteStart, src, quoteEnd) => {
    const normalized = normalizeSrc(src);
    return `src=${quoteStart}${normalized}${quoteEnd}`;
  });

const normalizeHref = (href) => {
  if (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  ) {
    return href;
  }

  const [path, hash] = href.split('#');
  const mappedPath = pageRouteMap[path];

  if (!mappedPath) {
    return href;
  }

  return hash ? `${mappedPath}#${hash}` : mappedPath;
};

const normalizeSrc = (src) => {
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('blob:') ||
    src.startsWith('tel:') ||
    src.startsWith('mailto:')
  ) {
    return src;
  }

  if (src.startsWith('/assets/')) {
    return src;
  }

  if (src.startsWith('./assets/')) {
    return `/assets/${src.slice('./assets/'.length)}`;
  }

  if (src.startsWith('assets/')) {
    return `/assets/${src.slice('assets/'.length)}`;
  }

  return src;
};

export default PageRenderer;
