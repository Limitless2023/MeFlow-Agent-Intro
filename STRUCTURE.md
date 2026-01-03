# Project Structure Guide

<!--
  说明：此文件用于帮助新手快速理解目录结构。
  仅描述当前 React + Vite 版项目。
-->

## Quick Map

- `index.html`: Vite 入口 HTML，React 会挂载到这里。
- `package.json`: 项目依赖与脚本入口。
- `vite.config.js`: Vite 配置（本地开发端口等）。
- `tailwind.config.js`: Tailwind 主题配置（设计系统主入口）。
- `postcss.config.cjs`: Tailwind 构建配置。
- `src/`: 主要源码目录。
- `public/`: 静态资源目录（构建时直接复制）。
- `agents.md`: 产品/系统架构文档。

## Source Details

- `src/main.jsx`: React 启动入口。
- `src/App.jsx`: 路由入口，负责页面切换。
- `src/routes.jsx`: 所有页面路由与文件映射。
- `src/components/PageRenderer.jsx`: 用于渲染原始 HTML 内容。
- `src/hooks/usePageMeta.js`: 设置页面标题与描述。
- `src/hooks/usePageInteractions.js`: 处理菜单与锚点交互。
- `src/styles/base.css`: 原有全局样式（保持视觉一致）。
- `src/styles/components.css`: 组件/布局样式（Tailwind 组件层）。
- `src/styles/app.css`: React 容器基础样式。
- `src/content/*.html`: 原站 HTML 内容（未改动，保持文案）。

## Common Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```


## UI Rhythm Spec (for future pages)

- Container: `max-w-[1200px] px-6` for main content sections.
- Page header:
  - Badge: `mb-4 inline-flex items-center gap-2 rounded-full bg-olive-light px-4 py-2 text-sm font-medium text-olive`
  - Title: `font-serif text-[clamp(2rem,3vw,2.75rem)] font-medium mb-4 leading-[1.3] text-gray-900`
  - Lead: `mx-auto mt-4 max-w-[700px|900px] text-[1.0625rem] text-gray-600 leading-[1.8]`
- Section cards (tech-adv subpages):
  - Wrapper: `rounded-xl border border-gray-200 bg-white p-8 shadow-lg`
  - Grid gap: `gap-8`
  - Section spacing: `mb-16`
- Section header block inside cards:
  - Icon wrapper: `h-14 w-14` with consistent gradient/olive styles
  - Icon size: `h-7 w-7`
  - Title: `text-xl font-semibold text-gray-900`
- Body text inside cards:
  - Description: `text-[0.9375rem] leading-[1.7] text-gray-600`
  - List items: `text-sm text-gray-600`
- View-details block:
  - Wrapper: `mt-auto`
  - Divider: `mt-6 border-t border-gray-200 pt-6`
  - Link: `text-[0.9375rem] font-medium text-olive`
- CTA buttons:
  - Primary: `px-7 py-3.5 text-base font-medium`
  - Secondary: `px-7 py-3.5 text-base font-medium`
