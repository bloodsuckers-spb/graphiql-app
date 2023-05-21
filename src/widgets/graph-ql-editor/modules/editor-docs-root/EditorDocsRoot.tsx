import { TypeOfOutput } from '../types';

import type { EditorDocsItemProps } from '../types';
import type { GraphQLSchema } from 'graphql';

type Props = {
  schema: GraphQLSchema;
} & EditorDocsItemProps;

export const EditorDocsRoot = ({ schema, handleClick }: Props) => {
  const name = schema.getQueryType()?.name ?? '';

  return (
    <div>
      <div>Docs</div>
      <div>
        A GraphQL schema provides a root type for each kind of operation.
      </div>
      <div>Root type</div>
      <span>query: </span>
      <button
        onClick={() =>
          handleClick({
            typeOfOutput: TypeOfOutput.TYPE,
            name,
          })
        }
      >
        {name}
      </button>
    </div>
  );
};
