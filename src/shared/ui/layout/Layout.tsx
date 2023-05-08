import { ErrorBoundary } from 'react-error-boundary';

import { Header, Footer } from 'widgets';

import styles from './Layout.module.scss';

import { Fallback, logError } from '../../libs';

import type { FCProps } from 'app/types';

export const Layout = ({ children }: FCProps) => (
  <div className={styles.wrapper}>
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
    >
      <Header />
    </ErrorBoundary>
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
    >
      <main className={styles.main}>{children}</main>
    </ErrorBoundary>
    <Footer />
  </div>
);
