import type { IntrospectionQuery } from 'graphql';
import type { ReactNode } from 'react';

type FlexDirection = 'column' | 'row' | 'inherit';

export type FCProps = {
  children: ReactNode;
  direction?: FlexDirection;
};

export type IntrospectionResponse = {
  data: IntrospectionQuery;
};

export type ResponseData = { data: IntrospectionQuery };
