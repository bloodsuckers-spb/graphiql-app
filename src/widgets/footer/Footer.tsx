import { useTranslation } from 'react-i18next';

import { Wrapper } from 'shared/ui';

import { authors } from './authors';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();
  return (
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
                aria-label={`${t(`${author.i18nKey}`)}`}
              >
                <svg className={styles.authorsIcon}>
                  <use href="./sprite.svg#github"></use>
                </svg>
              </a>
            );
          })}
        </div>
        <span className={styles.year}>2023</span>
        <div className={styles.logo}>
          <a
            className={styles.logo__href}
            href="https://rs.school/js/"
            aria-label="RS School"
          >
            <svg className={styles.icon}>
              <use href="./sprite.svg#rss-logo"></use>
            </svg>
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};
