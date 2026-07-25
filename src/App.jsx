import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Layout } from './components/layout/Layout';

// Code-split all page components
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const LearningPage = lazy(() => import('./pages/LearningPage').then(m => ({ default: m.LearningPage })));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage').then(m => ({ default: m.AcademicsPage })));
const CampusPage = lazy(() => import('./pages/CampusPage').then(m => ({ default: m.CampusPage })));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage').then(m => ({ default: m.AdmissionsPage })));
const NewsPage = lazy(() => import('./pages/NewsPage').then(m => ({ default: m.NewsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Page titles per route
const pageTitles = {
  '/': 'Vasant Valley School — Nurturing Independent Minds Since 1990',
  '/about': 'About Us — Vasant Valley School',
  '/learning': 'The Learning Experience — Vasant Valley School',
  '/academics': 'Academics & Curriculum — Vasant Valley School',
  '/campus': 'Campus & Facilities — Vasant Valley School',
  '/admissions': 'Admissions 2026–27 — Vasant Valley School',
  '/news': 'News & Events — Vasant Valley School',
  '/contact': 'Contact Us — Vasant Valley School',
};

const pageDescriptions = {
  '/': 'Vasant Valley School — a premier CBSE day school in Vasant Kunj, New Delhi, where every child is guided to think independently, act ethically, and lead purposefully.',
  '/about': 'Discover the founding story, vision, philosophy, and leadership of Vasant Valley School — established in 1990 by Aroon Purie and Rekha Purie.',
  '/learning': 'Explore the Eight Pillars of Learning that structure every child\'s experience at Vasant Valley: Cerebral, Social, Physical, Spiritual, Emotional, Environmental, Creative, and Ethical.',
  '/academics': 'Vasant Valley School\'s CBSE curriculum, three senior secondary streams, and enrichment programmes designed for excellence beyond the syllabus.',
  '/campus': 'An eight-acre campus in Vasant Kunj designed for curiosity — world-class facilities and the "classroom without walls" philosophy.',
  '/admissions': 'Apply to Vasant Valley School for the 2026–27 academic year. Discover the admissions process, key dates, and FAQs.',
  '/news': 'Latest news, achievements, events, and community highlights from Vasant Valley School, New Delhi.',
  '/contact': 'Contact Vasant Valley School — address, phone, email, and a simple message form. We\'d love to hear from you.',
};

// Scroll to top and set page title/description on route change
function RouteManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const title = pageTitles[pathname] || pageTitles['/'];
    const desc = pageDescriptions[pathname] || pageDescriptions['/'];

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, [pathname]);

  return null;
}

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-amber/20 border-t-amber animate-spin" />
        <p className="text-text-muted text-sm font-sans">Loading…</p>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <Layout>
      <RouteManager />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/campus" element={<CampusPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-base">
                <div className="text-center">
                  <p className="font-display text-8xl font-bold gradient-text mb-4">404</p>
                  <h1 className="font-display text-3xl font-semibold text-text mb-4">Page Not Found</h1>
                  <p className="text-text-muted font-sans mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="text-amber font-semibold font-sans hover:underline">← Return Home</a>
                </div>
              </div>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
