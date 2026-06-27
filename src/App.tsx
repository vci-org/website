import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Seo } from './components/Seo';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Partners = lazy(() => import('./pages/Partners').then(module => ({ default: module.Partners })));
const Participate = lazy(() => import('./pages/Participate').then(module => ({ default: module.Participate })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail').then(module => ({ default: module.ProjectDetail })));
const Diario = lazy(() => import('./pages/Archive').then(module => ({ default: module.Diario })));
const Info = lazy(() => import('./pages/Others').then(module => ({ default: module.Info })));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteLoader: React.FC = () => (
  <div className="min-h-[40vh] flex items-center justify-center px-4">
    <div className="text-center">
      <div className="w-10 h-10 mx-auto rounded-full border-4 border-vci-yellow/20 border-t-vci-yellow animate-spin" />
      <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-vci-yellow">Caricamento</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Seo />
      <Layout>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/progetti" element={<Projects />} />
            <Route path="/progetti/:projectId" element={<ProjectDetail />} />
            <Route path="/diario" element={<Diario />} />
            <Route path="/associazioni" element={<Partners />} />
            <Route path="/partecipa" element={<Participate />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
