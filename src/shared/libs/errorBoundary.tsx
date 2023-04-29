export const fallbackRender = ({ error }: { error: Error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
};

export const logError = (error: Error, info: { componentStack: string }) => {
  console.group('Something went wrong');
  console.log(`Error: ${error}`);
  console.log(`Info: ${info}`);
  console.groupEnd();
};
