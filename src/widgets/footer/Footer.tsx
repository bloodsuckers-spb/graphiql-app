import styles from './Footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.bounding}>
            <div className={styles.inner}>
                <div className={styles.authors}>
                    <a className={styles.links} href="https://github.com/bloodsuckers-spb" target="_blank" rel="noopener noreferrer">Author I</a>
                    <a className={styles.links} href="https://github.com/timothy7310" target="_blank" rel="noopener noreferrer">Author II</a>
                    <a className={styles.links} href="https://github.com/criphood" target="_blank" rel="noopener noreferrer">Author III</a>
                </div>
                <span className={styles.year}>2023</span>
                <a className={styles.logo} href="https://rs.school/js/">
                    <svg className={styles.icon}>
                        <use href="src/assets/img/sprite.svg#rss-logo"></use>
                    </svg>
                </a>
            </div>
        </div>
    </footer>
);
