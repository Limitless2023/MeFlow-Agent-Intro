import { Routes, Route, Navigate } from 'react-router-dom';
import PageRenderer from './components/PageRenderer.jsx';
import { pageRoutes } from './routes.jsx';

// App 只负责路由分发，页面渲染交由 PageRenderer 统一处理。
const App = () => (
  <Routes>
    {pageRoutes.map((page) => (
      <Route key={page.path} path={page.path} element={<PageRenderer html={page.html} />} />
    ))}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
