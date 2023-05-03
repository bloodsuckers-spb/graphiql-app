import { ErrorBoundary } from 'react-error-boundary';

import { Header, Footer } from 'widgets';

import styles from './Layout.module.scss';

import { Fallback, logError } from '../../libs';

import type { Props } from './Layout.models';

export const Layout = ({ children }: Props) => (
  <div className={styles.app}>
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
