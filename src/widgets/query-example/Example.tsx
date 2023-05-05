import { useEffect, useState } from 'react';

import styles from './Example.module.scss';

export const Example = () => {
  const [queryHighlight, setQueryHighlight] = useState(1);
  const [typesHighlight, setTypesHighlight] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      queryHighlight === 7
        ? setQueryHighlight(queryHighlight + 2)
        : setQueryHighlight(queryHighlight + 1);
      if (queryHighlight === 13) setQueryHighlight(1);
    }, 1000);

    if (queryHighlight === 1) setTypesHighlight(1); // hero
    if (queryHighlight === 2) setTypesHighlight(5); // name
    if (queryHighlight === 3) setTypesHighlight(6); // friends
    if (queryHighlight === 4) setTypesHighlight(5); // name
    if (queryHighlight === 5) setTypesHighlight(7); // homeWorld
    if (queryHighlight === 6) setTypesHighlight(12); // name
    if (queryHighlight === 7) setTypesHighlight(13); // climate
    if (queryHighlight === 9) setTypesHighlight(8); // species
    if (queryHighlight === 10) setTypesHighlight(17); // name
    if (queryHighlight === 11) setTypesHighlight(18); // lifespan
    if (queryHighlight === 12) setTypesHighlight(19); // origin
    if (queryHighlight === 13) setTypesHighlight(12); // name

    return () => clearInterval(interval);
  }, [queryHighlight]);

  return (
    <div className={styles.example}>
      <div
        style={{ top: `${30 + 17 * queryHighlight}px` }}
        className={styles.query__pointer}
      ></div>
      <div
        style={{ top: `${30 + 17 * typesHighlight}px` }}
        className={styles.types__pointer}
      ></div>
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
