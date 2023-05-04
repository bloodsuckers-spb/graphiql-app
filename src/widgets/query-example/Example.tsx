import styles from './Example.module.scss';

export const Example = () => {
  return (
    <div className={styles.example}>
      <pre className={styles.example__query}>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>hero {`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>name</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>friends {`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>name</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>homeWorld {`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>name</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>climate</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>species {`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>name</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>lifespan</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>origin {`{`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>name</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`  `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`}`}</span>
        </div>
      </pre>
      <div className={styles.example__border}></div>
      <pre className={styles.example__types}>
        <div className={styles.line}>
          <span>{` `}</span>
          <span style={{ color: 'var(--code-red)' }}>type </span>
          <span>Query</span>
          <span>{` {`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>hero</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>Character</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span style={{ color: 'var(--code-red)' }}>type </span>
          <span>Character</span>
          <span>{` {`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>name</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>String</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>friends</span>
          <span>: </span>
          <span>[</span>
          <span style={{ color: 'var(--code-yellow)' }}>Character</span>
          <span>]</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>homeWorld</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>Planet</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>species</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>Species</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span style={{ color: 'var(--code-red)' }}>type </span>
          <span>Planet</span>
          <span>{` {`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>name</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>String</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>climate</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>String</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`}`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span style={{ color: 'var(--code-red)' }}>type </span>
          <span>Species</span>
          <span>{` {`}</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>name</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>String</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>lifespan</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>Int</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`  `}</span>
          <span style={{ color: 'var(--code-blue)' }}>origin</span>
          <span>: </span>
          <span style={{ color: 'var(--code-yellow)' }}>Planet</span>
        </div>
        <div className={styles.line}>
          <span>{` `}</span>
          <span>{`}`}</span>
        </div>
      </pre>
    </div>
  );
};
