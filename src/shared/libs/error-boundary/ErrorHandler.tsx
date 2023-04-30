import { fallbackProps, errorInfo } from "./types";

export const Fallback = ({ error, resetErrorBoundary }: fallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export const logError = (error: Error, info: errorInfo) => {
  console.group('Something went wrong...');
  console.log(error);
  console.log(`Info: ${info}`);
  console.groupEnd();
};
