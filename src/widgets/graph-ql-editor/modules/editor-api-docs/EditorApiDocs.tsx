import { buildClientSchema } from 'graphql';
import { useState } from 'react';

import styles from './EditorApiDocs.module.scss';

import type { ResponseData } from 'app/types';

type Props = {
  data: ResponseData;
};

type HistoryItem = {
  title: string;
};

export const EditorApiDocs = ({ data: { data } }: Props) => {
  const [history, setHistory] = useState<Array<HistoryItem>>([]);
  const title = !history.length ? 'Docs' : history[history.length - 1].title;
  const schema = buildClientSchema(data);
  // const allSchemaTypes = schema.getTypeMap();
  const queryType = schema.getQueryType();
  const currentTypes = queryType?.toConfig().fields;

  console.log(currentTypes);
  // console.log(allSchemaTypes);

  const addToHistory = () => setHistory((history) => [...history, { title }]);

  return !history.length ? (
    <div>
      <h2>{title}</h2>
      <p>A GraphQL schema provides a root type for each kind of operation.</p>
      <div>
        <h3>Root Types</h3>
        <p>
          query:
          <button
            className={styles.btn}
            onClick={addToHistory}
          >
            Query
          </button>
        </p>
      </div>
      <div>
        <h3>All Schema Types</h3>
      </div>
    </div>
  ) : (
    <div>
      <button
        onClick={() =>
          setHistory(([...history]) => {
            history.pop();
            return history;
          })
        }
      >
        {title}
      </button>
      <h1>something else</h1>
    </div>
  );
};
