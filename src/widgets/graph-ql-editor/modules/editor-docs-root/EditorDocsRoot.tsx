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
      <div>Docs</div>
      <div>
        A GraphQL schema provides a root type for each kind of operation.
      </div>
      <div>Root type</div>
      <span>query: </span>
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
      {mutationName ? (
        <>
          <span>mutation: </span>
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
        </>
      ) : null}
      {subscriptionName ? (
        <>
          <span>subscription: </span>
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
        </>
      ) : null}
    </div>
  );
};
