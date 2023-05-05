import { Wrapper } from 'shared/ui';

import { authors } from './authors';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Wrapper className={styles.innerFooter}>
      <div className={styles.authors}>
        {authors.map((author) => {
          return (
            <a
              className={styles.links}
              href={author.link}
              target="_blank"
              rel="noopener noreferrer"
              key={author.id}
            >
              <svg className={styles.authorsIcon}>
                <use href="./sprite.svg#github"></use>
              </svg>
            </a>
          );
        })}
      </div>
      <span className={styles.year}>2023</span>
      <a
        className={styles.logo}
        href="https://rs.school/js/"
      >
        <svg className={styles.icon}>
          <use href="./sprite.svg#rss-logo"></use>
        </svg>
      </a>
    </Wrapper>
  </footer>
);
