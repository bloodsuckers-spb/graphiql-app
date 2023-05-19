import styles from './EditorMenu.module.scss';

export const EditorMenu = () => {
  return (
    <div className={styles.menu}>
      <button
        className={styles.button}
        aria-label="documentation"
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#docs`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label="history"
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#history`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label="refresh"
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#refresh`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label="short-keys"
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#short-keys`}></use>
        </svg>
      </button>
      <button
        className={styles.button}
        aria-label="settings"
      >
        <svg className={styles.icon}>
          <use href={`sprite.svg#settings`}></use>
        </svg>
      </button>
    </div>
  );
};
