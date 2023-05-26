import { useTranslation } from 'react-i18next';

import styles from './FormBtn.module.scss';

export const FormBtn = () => {
  const { t } = useTranslation();
  return (
    <button
      className={styles.btn}
      type="submit"
    >
      {t('formEnter')}
    </button>
  );
};
