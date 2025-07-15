import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Navigation from './components/Navigation';
import IntegrationLogos from './components/IntegrationLogos';
import Hero from './components/Hero';
import Features from './components/Features';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're experiencing some technical difficulties. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
const LoadingSpinner: React.FC = () => (
  <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-white text-lg">Loading FlowSync...</p>
    </div>
  </div>
);

// Smooth Scroll Hook
const useSmoothScroll = () => {
  useEffect(() => {
    // Add smooth scroll behavior for browsers that don't support it
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useSmoothScroll();

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Preload critical images/fonts
    const preloadResources = () => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = 'https://fonts.googleapis.com';
      document.head.appendChild(link);
    };

    preloadResources();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <div className="App bg-slate-900 min-h-screen">
        <Navigation />
        
        {/* Main content sections optimized for conversion flow */}
        <main>
          <Hero />
          
          {/* Social proof and trust indicators */}
          <div id="features">
            <Features />
          </div>
          
          {/* Detailed trust section with case studies and credentials */}
          <div id="trust">
            <TrustSection />
          </div>
          
          {/* Social proof through testimonials */}
          <div id="testimonials">
            <Testimonials />
          </div>
          
          {/* Integration logos - show tech stack compatibility */}
          <div id="integrations">
            <IntegrationLogos />
          </div>
          
          {/* Pricing - key conversion point */}
          <div id="pricing">
            <Pricing />
          </div>
          
          {/* FAQ - remove objections and build confidence */}
          <div id="faq">
            <FAQ />
          </div>
          
          {/* Final conversion CTA */}
          <div id="cta">
            <CTA />
          </div>
        </main>
        
        <Footer />
        
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}

// Scroll to top button component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default App;
