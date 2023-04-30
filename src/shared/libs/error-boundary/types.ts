export type fallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type errorInfo = { componentStack: string };
