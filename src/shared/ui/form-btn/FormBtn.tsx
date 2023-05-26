import { useTranslation } from 'react-i18next';

import styles from './FormBtn.module.scss';

type Props = {
  isDisabled: boolean;
};

export const FormBtn = ({ isDisabled }: Props) => {
  const { t } = useTranslation();
  return (
    <button
      className={styles.btn}
      type="submit"
      disabled={isDisabled}
    >
      {t('formEnter')}
    </button>
  );
};
