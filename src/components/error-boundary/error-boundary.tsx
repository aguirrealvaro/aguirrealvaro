"use client";

import React, { ReactNode } from "react";
import { ErrorBoundary as ErrorBoundaryComponent } from "react-error-boundary";

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className="text-red-500">{error.message}</pre>
    </div>
  );
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  // eslint-disable-next-line no-console
  const logError = (error: Error) => console.log(error);

  return (
    <ErrorBoundaryComponent FallbackComponent={ErrorFallback} onError={logError}>
      {children}
    </ErrorBoundaryComponent>
  );
};

export { ErrorBoundary };