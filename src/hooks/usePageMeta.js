import { useEffect } from 'react';

// 更新页面标题与描述，保证每个路由都有对应的 SEO 信息。
const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaTag = document.querySelector('meta[name="description"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'description');
        document.head.appendChild(metaTag);
      }

      metaTag.setAttribute('content', description);
    }
  }, [title, description]);
};

export default usePageMeta;
