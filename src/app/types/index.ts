import type { IntrospectionQuery } from 'graphql';
import type { GraphQLSchema } from 'graphql';
import type { ReactNode } from 'react';

type FlexDirection = 'column' | 'row' | 'inherit';

export type FCProps = {
  children: ReactNode;
  direction?: FlexDirection;
};

export type IntrospectionResponse = {
  data: IntrospectionQuery;
};

export type EditorProps = {
  storeApiURL: string;
  setSchema: (schema: GraphQLSchema) => void;
  data?: IntrospectionResponse;
};
