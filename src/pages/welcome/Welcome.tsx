/* eslint-disable import/no-default-export */

import { useTranslation, Trans } from 'react-i18next';
import { Wrapper } from 'shared/ui';
import { Example } from 'widgets/query-example';

import styles from './Welcome.module.scss';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles.welcome}>
        <h2 className={styles.title}>
          <span>{t('startingPlease')}</span>, {t('startingText')}
        </h2>
        <section className={styles.intro}>
          <div className={styles.logo}>
            <svg className={styles.logo__img}>
              <use href="sprite.svg#logo"></use>
            </svg>
            <h3 className={styles.logo__title}>
              <span>GraphiQL</span>
              Clone
            </h3>
          </div>
          <div className={styles.blocks}>
            <div className={styles.block}>
              <h3 className={styles.block__title}>{t('features1')}</h3>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-red)' }}>type </span>
                  <span>Project </span>
                  <span style={{ color: 'var(--code-grey)' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-blue)' }}>name</span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--code-yellow)' }}>String </span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-blue)' }}>tagline</span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--code-yellow)' }}>String </span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-blue)' }}>
                    contributors
                  </span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--code-grey)' }}>[</span>
                  <span style={{ color: 'var(--code-yellow)' }}>User</span>
                  <span style={{ color: 'var(--code-grey)' }}>]</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-grey)' }}>{`}`}</span>
                </div>
              </pre>
            </div>
            <div className={styles.block}>
              <h3 className={styles.block__title}>{t('features2')}</h3>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-grey)' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span>project</span>
                  <span style={{ color: 'var(--code-grey)' }}>(</span>
                  <span style={{ color: 'var(--code-blue)' }}>name</span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--color-accent)' }}>
                    "GraphQL"
                  </span>
                  <span style={{ color: 'var(--code-grey)' }}>)</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span>{`   `}</span>
                  <span>tagline</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-grey)' }}>{`}`}</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-grey)' }}>{`}`}</span>
                </div>
              </pre>
            </div>
            <div className={styles.block}>
              <h3 className={styles.block__title}>{t('features3')}</h3>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-grey)' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-blue)' }}>"project"</span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--code-grey)' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-blue)' }}>"tagline"</span>
                  <span style={{ color: 'var(--code-grey)' }}>: </span>
                  <span style={{ color: 'var(--color-accent)' }}>
                    "A query language for APIs"
                  </span>
                </div>
                <div className={styles.line}>
                  <span>{`   `}</span>
                  <span style={{ color: 'var(--code-grey)' }}>{`}`}</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: 'var(--code-grey)' }}>{`}`}</span>
                </div>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.lang}>
            <h2 className={styles.about__title}>{t('aboutTitle1')}</h2>
            <p className={styles.about__text}>{t('aboutText1')}</p>
          </div>
          <div className={styles.description}>
            <Example />
            <div className={styles.describe}>
              <h2 className={styles.describe__title}>
                <Trans i18nKey={'aboutTitle2'}></Trans>
              </h2>
              <p className={styles.describe__text}>{t('aboutText2')}</p>
            </div>
          </div>
          <div className={styles.tools}>
            <h2 className={styles.tools__title}>
              <Trans i18nKey={'aboutTitle3'}></Trans>
            </h2>
            <p className={styles.about__text}>{t('aboutText3')}</p>
          </div>
        </section>
        <section className={styles.team}>
          <h2 className={styles.team__title}>{t('ourTeam')}</h2>
          <div className={styles.team__members}>
            <div className={styles.member}>
              <img
                className={styles.member__avatar}
                src="avatar-vitaly.jpg"
                alt=""
              />
              <p className={styles.member__name}>{t('author1')}</p>
              <a
                className={styles.member__github}
                href="https://github.com/bloodsuckers-spb"
                target="blank"
              >
                GitHub
              </a>
            </div>
            <div className={styles.member}>
              <img
                className={styles.member__avatar}
                src="avatar-timofey.jpg"
                alt=""
              />
              <p className={styles.member__name}>{t('author2')}</p>
              <a
                className={styles.member__github}
                href="https://github.com/Timothy7310"
                target="blank"
              >
                GitHub
              </a>
            </div>
            <div className={styles.member}>
              <img
                className={styles.member__avatar}
                src="avatar-artem.jpg"
                alt=""
              />
              <p className={styles.member__name}>{t('author3')}</p>
              <a
                className={styles.member__github}
                href="https://github.com/criphood"
                target="blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Welcome;
