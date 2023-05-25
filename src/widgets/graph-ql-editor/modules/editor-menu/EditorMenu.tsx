import { useTranslation } from 'react-i18next';

import styles from './EditorMenu.module.scss';

type Props = {
  setIsDocsOpen: () => void;
};

export const EditorMenu = ({ setIsDocsOpen }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.menu}>
      <button
        className={styles.button}
        aria-label={`${t('docButtonAriaLabel')}`}
        onClick={setIsDocsOpen}
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#docs`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label={`${t('historyButtonAriaLabel')}`}
        disabled
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#history`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label={`${t('refreshButtonAriaLabel')}`}
        disabled
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#refresh`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label={`${t('shortKeysButtonAriaLabel')}`}
        disabled
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#short-keys`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label={`${t('settingsButtonAriaLabel')}`}
        disabled
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#settings`}></use>
        </svg>
      </button>
    </div>
  );
};
