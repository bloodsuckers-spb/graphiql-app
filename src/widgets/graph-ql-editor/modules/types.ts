import { CurrentDocData, OnClickProps } from './editor-api-docs';

export enum TypeOfOutput {
  ROOT = 'root',
  TYPE = 'type',
  NAME = 'name',
}

export type EditorDocsItemProps = {
  handleClick: (data: OnClickProps) => void;
} & CurrentDocData;
