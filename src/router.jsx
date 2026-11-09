import { createHashRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';

const HomeView = lazy(() => import('./views/HomeView'));
const TopicsView = lazy(() => import('./views/TopicsView'));
const ConceptsView = lazy(() => import('./views/ConceptsView'));
const CasesView = lazy(() => import('./views/CasesView'));
const ProjectView = lazy(() => import('./views/ProjectView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

const withSuspense = (Component) => <Suspense fallback={<div role="status" className="p-8 text-center">Cargando…</div>}><Component /></Suspense>;

export const router = createHashRouter([{ element: <MainLayout />, children: [
  { path: '/', element: withSuspense(HomeView) },
  { path: '/temas', element: withSuspense(TopicsView) },
  { path: '/conceptos', element: withSuspense(ConceptsView) },
  { path: '/casos-practicos', element: withSuspense(CasesView) },
  { path: '/proyecto', element: withSuspense(ProjectView) },
  { path: '*', element: withSuspense(NotFoundView) },
] }]);
