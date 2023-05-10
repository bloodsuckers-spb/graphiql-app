/* eslint-disable import/no-default-export */
import styles from './EditorControls.module.scss';

const EditorControls = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.play}>
        <svg className={styles.playIcon}>
          <use href="sprite.svg#play"></use>
        </svg>
      </button>
    </div>
  );
};

export default EditorControls;
