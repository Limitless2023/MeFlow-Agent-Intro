import { useEffect } from 'react';

// 复用原站交互逻辑：移动端菜单、锚点平滑滚动、技术导航高亮。
const usePageInteractions = (containerRef, hash, navigate) => {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) {
      return undefined;
    }

    const mobileMenuBtn = root.querySelector('.mobile-menu-btn');
    const navLinks = root.querySelector('.nav-links');

    const toggleMenu = () => {
      if (!navLinks) {
        return;
      }

      navLinks.classList.toggle('hidden');
      navLinks.classList.toggle('flex');
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    const anchorLinks = root.querySelectorAll('a[href^="#"]');
    const anchorHandler = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const target = root.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks) {
          navLinks.classList.add('hidden');
          navLinks.classList.remove('flex');
        }
      }
    };

    anchorLinks.forEach((anchor) => anchor.addEventListener('click', anchorHandler));

    const routeLinks = root.querySelectorAll('a[href^="/"]');
    const routeHandler = (event) => {
      const href = event.currentTarget.getAttribute('href');
      const target = event.currentTarget.getAttribute('target');
      if (!href || target === '_blank') {
        return;
      }

      event.preventDefault();
      navigate(href);
    };

    routeLinks.forEach((link) => link.addEventListener('click', routeHandler));

    const techNavItems = root.querySelectorAll('.tech-nav-item');
    const sections = root.querySelectorAll('section[id]');
    const techNavRoutes = {
      AI原生系统: '/ai-native-system',
      技术架构: '/architecture',
      SOTA模型: '/sota-models',
      工具生态: '/tools-ecosystem',
      上下文工程: '/context-engineering',
      企业安全: '/enterprise-security',
      'AI Native System': '/en/ai-native-system',
      Architecture: '/en/architecture',
      'SOTA Models': '/en/sota-models',
      'Tooling Ecosystem': '/en/tools-ecosystem',
      'Context Engineering': '/en/context-engineering',
      'Enterprise Security': '/en/enterprise-security'
    };

    const activateTechNavItem = (activeItem) => {
      techNavItems.forEach((item) => {
        item.classList.remove('text-olive', 'border-b-2', 'border-olive');
        item.classList.add('text-gray-600', 'border-b-2', 'border-transparent');
      });
      if (activeItem) {
        activeItem.classList.remove('text-gray-600', 'border-transparent');
        activeItem.classList.add('text-olive', 'border-olive');
      }
    };

    const handleTechNavClick = (event) => {
      const label = event.currentTarget.textContent.trim();
      if (label === '全部模块' || label === 'All Modules') {
        const target = root.querySelector('#tech-advantages');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        activateTechNavItem(event.currentTarget);
        return;
      }

      const route = techNavRoutes[label];
      if (route) {
        activateTechNavItem(event.currentTarget);
        navigate(route);
      }
    };

    const handleScroll = () => {
      if (!sections.length || !techNavItems.length) {
        return;
      }

      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      techNavItems.forEach((item) => {
        item.classList.remove('text-olive', 'border-b-2', 'border-olive');
        item.classList.add('text-gray-600', 'border-b-2', 'border-transparent');
        if ((item.textContent.includes('全部') || item.textContent.includes('All Modules')) && current === 'tech-advantages') {
          item.classList.remove('text-gray-600', 'border-transparent');
          item.classList.add('text-olive', 'border-olive');
        }
      });
    };

    if (techNavItems.length) {
      techNavItems.forEach((item) => item.addEventListener('click', handleTechNavClick));
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', toggleMenu);
      }
      anchorLinks.forEach((anchor) => anchor.removeEventListener('click', anchorHandler));
      routeLinks.forEach((link) => link.removeEventListener('click', routeHandler));
      if (techNavItems.length) {
        techNavItems.forEach((item) => item.removeEventListener('click', handleTechNavClick));
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef, hash, navigate]);

  useEffect(() => {
    if (!hash || !containerRef.current) {
      return;
    }

    const target = containerRef.current.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash, containerRef]);
};

export default usePageInteractions;
