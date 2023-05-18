import styles from './EditorMenu.module.scss';

export const EditorMenu = () => {
  return (
    <div className={styles.menu}>
      <svg className={styles.docs}>
        <use href={`sprite.svg#docs`}></use>
      </svg>
      <svg className={styles.history}>
        <use href={`sprite.svg#history`}></use>
      </svg>
      <svg className={styles.refresh}>
        <use href={`sprite.svg#refresh`}></use>
      </svg>
      <svg className={styles.shortKeys}>
        <use href={`sprite.svg#short-keys`}></use>
      </svg>
      <svg className={styles.settings}>
        <use href={`sprite.svg#settings`}></use>
      </svg>
    </div>
  );
};
