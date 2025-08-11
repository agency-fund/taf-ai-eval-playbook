import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics Measurement ID from environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-Z5GPQG6G7R';

/**
 * Custom hook for Google Analytics 4 (GA4) tracking
 * 
 * This hook provides:
 * - Automatic page view tracking on route changes
 * - Custom event tracking capability
 * - SEO-friendly script loading
 * 
 * @example
 * ```tsx
 * import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
 * 
 * function MyComponent() {
 *   const { trackEvent } = useGoogleAnalytics();
 * 
 *   const handleButtonClick = () => {
 *     // Track a custom event
 *     trackEvent('button_click', 'engagement', 'cta_button', 1);
 *   };
 * 
 *   return (
 *     <button onClick={handleButtonClick}>
 *       Click me
 *     </button>
 *   );
 * }
 * ```
 */
export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    if (window.gtag) {
      console.log(`[Google Analytics] Tracking page view: ${location.pathname}`);
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    } else {
      console.log('[Google Analytics] gtag not loaded yet');
    }
  }, [location]);

  /**
   * Track a custom event in Google Analytics
   * 
   * @param action - The action being tracked (e.g., 'button_click', 'form_submit')
   * @param category - The category of the event (e.g., 'engagement', 'ecommerce')
   * @param label - Optional label for the event (e.g., 'cta_button', 'contact_form')
   * @param value - Optional numeric value associated with the event
   * 
   * @example
   * ```tsx
   * // Track a button click
   * trackEvent('button_click', 'engagement', 'cta_button', 1);
   * 
   * // Track a form submission
   * trackEvent('form_submit', 'engagement', 'contact_form');
   * 
   * // Track a purchase
   * trackEvent('purchase', 'ecommerce', 'product_purchase', 99.99);
   * ```
   */
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent };
}; 