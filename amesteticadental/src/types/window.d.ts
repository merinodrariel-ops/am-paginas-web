export {};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (event: string, name: string, params?: Record<string, unknown>) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}
