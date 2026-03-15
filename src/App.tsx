import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { ThemeProvider } from "./components/ThemeProvider";
import { SiteChrome } from "./components/site/SiteChrome";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();
const loadAboutPage = () => import("./pages/AboutPage");
const loadTreatmentsPage = () => import("./pages/TreatmentsPage");
const loadTreatmentDetailPage = () => import("./pages/TreatmentDetailPage");
const loadResultsPage = () => import("./pages/ResultsPage");
const loadBlogPage = () => import("./pages/BlogPage");
const loadBlogPostPage = () => import("./pages/BlogPostPage");
const loadContactPage = () => import("./pages/ContactPage");
const loadNotFoundPage = () => import("./pages/NotFound");

const AboutPage = lazy(loadAboutPage);
const TreatmentsPage = lazy(loadTreatmentsPage);
const TreatmentDetailPage = lazy(loadTreatmentDetailPage);
const ResultsPage = lazy(loadResultsPage);
const BlogPage = lazy(loadBlogPage);
const BlogPostPage = lazy(loadBlogPostPage);
const ContactPage = lazy(loadContactPage);
const NotFound = lazy(loadNotFoundPage);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const PrefetchRoutes = () => {
  useEffect(() => {
    const preload = () => {
      void loadAboutPage();
      void loadTreatmentsPage();
      void loadTreatmentDetailPage();
      void loadResultsPage();
      void loadBlogPage();
      void loadBlogPostPage();
      void loadContactPage();
      void loadNotFoundPage();
    };

    const idleCallback = window.requestIdleCallback?.(preload, { timeout: 1200 });
    const timeoutId = idleCallback ? null : window.setTimeout(preload, 250);

    return () => {
      if (idleCallback) {
        window.cancelIdleCallback?.(idleCallback);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        <Route element={<SiteChrome />}>
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
    </Suspense>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="clinic">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <PrefetchRoutes />
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
