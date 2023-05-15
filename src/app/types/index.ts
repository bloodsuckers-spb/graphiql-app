import { IntrospectionQuery } from 'graphql';
import { ReactNode } from 'react';

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
  data?: IntrospectionResponse;
};
