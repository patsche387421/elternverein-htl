import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import InternalLayout from './components/InternalLayout';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/CalendarPage';

import News from './pages/News';
import Impressum from './pages/Impressum';
import ProjectApplication from './pages/ProjectApplication';
import ProjectOverview from './pages/ProjectOverview';
import DataPrivacy from './pages/DataPrivacy';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectsArchive from './pages/ProjectsArchive';
import Board from './pages/Board';
import Statutes from './pages/Statutes';
import Terms from './pages/Terms';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
          <ScrollToTop />
          <CookieBanner />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="about/board" element={<Board />} />
              <Route path="about/statutes" element={<Statutes />} />
              <Route path="kontakt" element={<Contact />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:type" element={<Services />} />

              <Route path="projekte" element={<Projects />} />
              <Route path="projekte/archive" element={<ProjectsArchive />} />
              <Route path="projekte/overview" element={<ProjectOverview />} />
              <Route path="projekte/apply" element={<ProjectApplication />} />
              <Route path="terms" element={<Terms />} />
              <Route path="datenschutz" element={<DataPrivacy />} />
              <Route path="impressum" element={<Impressum />} />
              <Route path="login" element={<Login />} />
            </Route>

            {/* Dashboard Routes (Internal) */}
            <Route path="/dashboard" element={<InternalLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="messages" element={<div className="p-8 text-center text-foreground/50">Messaging coming soon...</div>} />
              <Route path="settings" element={<div className="p-8 text-center text-foreground/50">Settings coming soon...</div>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
