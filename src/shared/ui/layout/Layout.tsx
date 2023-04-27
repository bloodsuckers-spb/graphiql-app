import { Header, Footer } from '../../../widgets';

import styles from './Layout.module.scss';

import { Props } from './Layout.models';

export const Layout = ({ children }: Props) => (
  <div className={styles.app}>
    <Header />
    <main>
      <div className={styles.bounding}>
        <div className={styles.inner}>{children}</div>
      </div>
    </main>
    <Footer />
  </div>
);
