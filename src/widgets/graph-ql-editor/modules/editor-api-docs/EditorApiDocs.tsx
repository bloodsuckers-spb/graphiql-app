/* eslint-disable @typescript-eslint/no-unused-vars */
import { buildClientSchema } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLInputObjectType,
  GraphQLNamedType,
} from 'graphql';
import { useState } from 'react';

import styles from './EditorApiDocs.module.scss';

import { EditorDocsNonRoot } from '../editor-docs-non-root';
import { EditorDocsRoot } from '../editor-docs-root';

import { TypeOfOutput } from '../types';

import type { ResponseData } from 'app/types';
import type { Maybe } from 'graphql/jsutils/Maybe';

type Props = {
  data: ResponseData;
};

export type CurrentDocData = {
  name: string;
  type?: string;
  fieldsType?: Maybe<GraphQLObjectType<unknown, unknown>> | GraphQLNamedType;
  fields?: Array<[string, FieldsData]>;
  description: string;
  typeOfOutput: TypeOfOutput;
};

type FieldsData = {
  args: Array<FieldArgs>;
  name: string;
  type: string;
  description: string;
};

type FieldArgs = {
  name: string;
  type: string;
};

export type OnClickProps = {
  name: string;
  typeOfOutput: TypeOfOutput;
  type?: string;
  args?: { name: string; type: string };
};

export const EditorApiDocs = ({ data: { data } }: Props) => {
  const schema = buildClientSchema(data);
  const rootData: CurrentDocData = {
    name: '',
    fieldsType: schema.getQueryType(),
    description: '',
    typeOfOutput: TypeOfOutput.ROOT,
  };

  const [history, setHistory] = useState<Array<CurrentDocData>>([]);
  const [currentData, setCurrentData] = useState<CurrentDocData>(rootData);

  const addToHistory = (item: CurrentDocData) => {
    setHistory((history) => [...history, item]);
  };

  const removeFromHistory = () => {
    setHistory(([...history]) => {
      history.pop();
      return history;
    });
  };

  const onClick = ({ type, name, typeOfOutput, args }: OnClickProps) => {
    const currentState = {
      name,
      type,
      fieldsType: schema.getType(name),
      description: '',
    };
    switch (typeOfOutput) {
      case TypeOfOutput.TYPE: {
        const currentType = schema.getType(name);
        if (currentType instanceof GraphQLScalarType) {
          currentData.description = currentType.description ?? '';
        } else {
          if (
            currentType instanceof GraphQLObjectType ||
            currentType instanceof GraphQLInputObjectType
          ) {
            const fields = Object.entries(
              JSON.parse(JSON.stringify(currentType?.getFields()))
            ) as Array<[string, FieldsData]>;
            setCurrentData({
              ...currentState,
              fields,
              typeOfOutput: TypeOfOutput.TYPE,
            });
            addToHistory(currentData);
          }
        }
        break;
      }

      case TypeOfOutput.NAME: {
        setCurrentData({
          ...currentState,
          typeOfOutput: TypeOfOutput.NAME,
        });
        break;
      }

      default:
        setCurrentData(rootData);
    }
  };
  return !history.length ? (
    <EditorDocsRoot
      {...rootData}
      onClick={onClick}
    />
  ) : (
    <EditorDocsNonRoot />
  );
};
