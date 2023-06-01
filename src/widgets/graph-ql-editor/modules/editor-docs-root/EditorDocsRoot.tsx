import styles from './EditorDocsRoot.module.scss';

import { TypeOfOutput } from '../types';

import type { SelectDataProps, CurrentDocData } from '../types';
import type { GraphQLSchema } from 'graphql';

type Props = {
  selectData: (data: SelectDataProps) => void;
  schema: GraphQLSchema;
} & CurrentDocData;

export const EditorDocsRoot = ({ selectData, schema }: Props) => {
  const queryName = schema.getQueryType()?.name ?? '';
  const mutationName = schema.getMutationType()?.name ?? '';
  const subscriptionName = schema.getSubscriptionType()?.name ?? '';

  return (
    <div className={styles.docsRoot}>
      <div className={styles.docsAbout}>
        <h2 className={styles.docsRootTitle}>Docs</h2>
        <p className={styles.docsRootDescription}>
          A GraphQL schema provides a root type for each kind of operation.
        </p>
      </div>
      <div className={styles.docsInfo}>
        <ul className={styles.docsInfoList}>
          <li>
            <span className={styles.fieldsNames}>query: </span>
            <button
              className={styles.btn}
              onClick={() =>
                selectData({
                  typeOfOutput: TypeOfOutput.TYPE,
                  name: queryName,
                })
              }
            >
              {queryName}
            </button>
          </li>
          {mutationName ? (
            <li>
              <span className={styles.fieldsNames}>mutation: </span>
              <button
                className={styles.btn}
                onClick={() =>
                  selectData({
                    typeOfOutput: TypeOfOutput.TYPE,
                    name: mutationName,
                  })
                }
              >
                {mutationName}
              </button>
            </li>
          ) : null}
          {subscriptionName ? (
            <li>
              <span className={styles.fieldsNames}>subscription: </span>
              <button
                className={styles.btn}
                onClick={() =>
                  selectData({
                    typeOfOutput: TypeOfOutput.TYPE,
                    name: subscriptionName,
                  })
                }
              >
                {subscriptionName}
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
