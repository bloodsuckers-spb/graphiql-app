import { ReactNode } from 'react';

type FlexDirection = 'column' | 'row' | 'inherit';

export type FCProps = {
  children: ReactNode;
  direction?: FlexDirection;
};
