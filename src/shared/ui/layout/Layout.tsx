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

    <main>
      <div className={styles.bounding}>
        <div className={styles.inner}>{children}</div>
      </div>
    </main>
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
    >
      <Footer />
    </ErrorBoundary>
  </div>
);
