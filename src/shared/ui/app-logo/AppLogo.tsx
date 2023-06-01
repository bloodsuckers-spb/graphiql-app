import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import styles from './AppLogo.module.scss';

export const AppLogo = () => {
  const { t } = useTranslation();
  return (
    <Link
      to={'/'}
      aria-label={`${t('logoAriaLabel')}`}
    >
      <svg className={styles.logo}>
        <use href="sprite.svg#logo"></use>
      </svg>
    </Link>
  );
};
