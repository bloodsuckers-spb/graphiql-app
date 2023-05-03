/* eslint-disable import/no-default-export */

import styles from './Welcome.module.scss';

const Welcome = () => (
  <div className={styles.welcome}>
    <div className={styles.bounding}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.title}>
            <span>Please</span>, Sign In to start exploring
          </h1>
          <section className={styles.intro}>
            <div className={styles.logo}>
              <svg className={styles.logo__img}>
                <use href="sprite.svg#logo"></use>
              </svg>
              <h1 className={styles.logo__title}>
                <span>GraphiQL</span>
                Clone
              </h1>
            </div>
            <div className={styles.block}>
              <h1 className={styles.block__title}>Describe your code</h1>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: '#b11a04' }}>type </span>
                  <span>Project </span>
                  <span style={{ color: '#555555' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#1f61a0' }}>name</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: '#ca9800' }}>String </span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#1f61a0' }}>tagline</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: '#ca9800' }}>String </span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#1f61a0' }}>contributors</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: '#555555' }}>[</span>
                  <span style={{ color: '#ca9800' }}>User</span>
                  <span style={{ color: '#555555' }}>]</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: '#555555' }}>{`}`}</span>
                </div>
              </pre>
            </div>
            <div className={styles.block}>
              <h1 className={styles.block__title}>Ask for what you want</h1>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: '#555555' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span>project</span>
                  <span style={{ color: '#555555' }}>(</span>
                  <span style={{ color: '#1f61a0' }}>name</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: 'var(--color-accent)' }}>
                    "GraphQL"
                  </span>
                  <span style={{ color: '#555555' }}>)</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span> </span>
                  <span>tagline</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#555555' }}>{`}`}</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: '#555555' }}>{`}`}</span>
                </div>
              </pre>
            </div>
            <div className={styles.block}>
              <h1 className={styles.block__title}>Get predictable results</h1>
              <pre className={styles.block__code}>
                <div className={styles.line}>
                  <span style={{ color: '#555555' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#1f61a0' }}>"project"</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: '#555555' }}>{`{`}</span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span> </span>
                  <span style={{ color: '#1f61a0' }}>"tagline"</span>
                  <span style={{ color: '#555555' }}>: </span>
                  <span style={{ color: 'var(--color-accent)' }}>
                    "A query language for APIs"
                  </span>
                </div>
                <div className={styles.line}>
                  <span> </span>
                  <span style={{ color: '#555555' }}>{`}`}</span>
                </div>
                <div className={styles.line}>
                  <span style={{ color: '#555555' }}>{`}`}</span>
                </div>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
