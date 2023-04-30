export type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type ErrorInfo = { componentStack: string };
