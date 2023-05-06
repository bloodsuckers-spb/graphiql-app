/* eslint-disable import/no-default-export */

import styles from './Welcome.module.scss';

import { Wrapper } from '../../shared/ui';
import { Example } from '../../widgets/query-example';

const Welcome = () => (
  <Wrapper className={''}>
    <div className={styles.welcome}>
      <h2 className={styles.title}>
        <span>Please</span>, Sign In to start exploring
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
            <h3 className={styles.block__title}>Describe your code</h3>
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
                <span style={{ color: 'var(--code-blue)' }}>contributors</span>
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
            <h3 className={styles.block__title}>Ask for what you want</h3>
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
                <span style={{ color: 'var(--color-accent)' }}>"GraphQL"</span>
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
            <h3 className={styles.block__title}>Get predictable results</h3>
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
          <h2 className={styles.about__title}>A query language for your API</h2>
          <p className={styles.about__text}>
            GraphQL is a query language for APIs and a runtime for fulfilling
            those queries with your existing data. GraphQL provides a complete
            and understandable description of the data in your API, gives
            clients the power to ask for exactly what they need and nothing
            more, makes it easier to evolve APIs over time, and enables powerful
            developer tools.
          </p>
        </div>
        <div className={styles.description}>
          <Example />
          <div className={styles.describe}>
            <h2 className={styles.describe__title}>
              Describe what’s possible <br /> with a type system
            </h2>
            <p className={styles.describe__text}>
              GraphQL APIs are organized in terms of types and fields, not
              endpoints. Access the full capabilities of your data from a single
              endpoint. GraphQL uses types to ensure Apps only ask for what’s
              possible and provide clear and helpful errors. Apps can use types
              to avoid writing manual parsing code.
            </p>
          </div>
        </div>
        <div className={styles.tools}>
          <h2 className={styles.tools__title}>
            Move faster with powerful <br /> developer tools
          </h2>
          <p className={styles.about__text}>
            Know exactly what data you can request from your API without leaving
            your editor, highlight potential issues before sending a query, and
            take advantage of improved code intelligence. GraphQL makes it easy
            to build powerful tools like{' '}
            <span className={styles.about__text__accent}>QraphiQL</span> by
            leveraging your API’s type system.
          </p>
        </div>
      </section>
      <section className={styles.team}>
        <h2 className={styles.team__title}>Our Team</h2>
        <div className={styles.team__members}>
          <div className={styles.member}>
            <img
              className={styles.member__avatar}
              src="avatar-vitaly.jpg"
              alt="avatar.jpg"
            />
            <p className={styles.member__name}>Vitaly</p>
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
              alt="avatar.jpg"
            />
            <p className={styles.member__name}>Timofey</p>
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
              alt="avatar.jpg"
            />
            <p className={styles.member__name}>Artem</p>
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

export default Welcome;
