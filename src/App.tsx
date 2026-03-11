import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, type ReactNode } from "react";

import { ThemeProvider } from "./components/ThemeProvider";
import { SiteChrome } from "./components/site/SiteChrome";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const TreatmentsPage = lazy(() => import("./pages/TreatmentsPage"));
const TreatmentDetailPage = lazy(() => import("./pages/TreatmentDetailPage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => <div className="min-h-screen bg-background" />;

const PageTransition = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route element={<PageTransition><SiteChrome /></PageTransition>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/tratamentos" element={<TreatmentsPage />} />
          <Route path="/tratamentos/:slug" element={<TreatmentDetailPage />} />
          <Route path="/resultados" element={<ResultsPage />} />
          <Route path="/conteudo" element={<BlogPage />} />
          <Route path="/conteudo/:slug" element={<BlogPostPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="clinic">
    {/* Noise overlay for analog texture */}
    <svg className="noise-overlay" aria-hidden="true">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Suspense fallback={<RouteFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
