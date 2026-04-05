import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import InternalLayout from './components/InternalLayout';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import AppLoader from './components/AppLoader';

// Lazy loaded pages for Code Splitting
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const Messages = lazy(() => import('./pages/Messages'));
const Settings = lazy(() => import('./pages/Settings'));
const News = lazy(() => import('./pages/News'));
const NewsArticle = lazy(() => import('./pages/NewsArticle'));
const Impressum = lazy(() => import('./pages/Impressum'));
const ProjectApplication = lazy(() => import('./pages/ProjectApplication'));
const ProjectOverview = lazy(() => import('./pages/ProjectOverview'));
const DataPrivacy = lazy(() => import('./pages/DataPrivacy'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectsArchive = lazy(() => import('./pages/ProjectsArchive'));
const Board = lazy(() => import('./pages/Board'));
const Statutes = lazy(() => import('./pages/Statutes'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
          <ScrollToTop />
          <CookieBanner />
          <Suspense fallback={<AppLoader />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="news" element={<News />} />
                <Route path="news/:id" element={<NewsArticle />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="about/board" element={<Board />} />
                <Route path="about/statutes" element={<Statutes />} />
                <Route path="kontakt" element={<Contact />} />
                <Route path="services" element={<Services />} />
                <Route path="services/:type" element={<Services />} />

                <Route path="projekte" element={<Projects />} />
                <Route path="projekte/archiv" element={<ProjectsArchive />} />
                <Route path="projekte/uebersicht" element={<ProjectOverview />} />
                <Route path="projekte/antrag" element={<ProjectApplication />} />
                <Route path="terms" element={<Terms />} />
                <Route path="datenschutz" element={<DataPrivacy />} />
                <Route path="impressum" element={<Impressum />} />
                <Route path="login" element={<Login />} />

                {/* Catch-all route to handle refreshes and direct URL access */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>

              {/* Dashboard Routes (Internal) */}
              <Route path="/dashboard" element={<InternalLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="calendar" element={<CalendarPage />} />
                <Route path="messages" element={<Messages />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
  );
}

export default App;
