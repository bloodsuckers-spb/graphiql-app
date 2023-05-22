/* eslint-disable @typescript-eslint/no-unused-vars */
import { buildClientSchema } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLInputObjectType,
} from 'graphql';
import { useState } from 'react';

import styles from './EditorApiDocs.module.scss';

import { EditorDocsNonRoot } from '../editor-docs-non-root';

import { TypeOfOutput } from '../types';

import type { CurrentDocData, FieldsData, FieldArgs } from '../types';
import type { ResponseData } from 'app/types';

type Props = {
  data: ResponseData;
};

export type SelectDataProps = Omit<CurrentDocData, 'description' | 'fields'>;

export const EditorApiDocs = ({ data: { data } }: Props) => {
  const schema = buildClientSchema(data);
  const rootData: CurrentDocData = {
    name: '',
    description: '',
    typeOfOutput: TypeOfOutput.ROOT,
  };

  const [history, setHistory] = useState<Array<CurrentDocData>>([rootData]);

  const currentData = history[history.length - 1];

  const addToHistory = (item: CurrentDocData) => {
    setHistory((history) => [...history, item]);
  };

  const removeFromHistory = () => {
    setHistory(([...history]) => {
      history.pop();
      return history;
    });
  };

  const selectData = ({ name, typeOfOutput, type, args }: SelectDataProps) => {
    const fields: Array<[string, FieldsData]> = [];
    const currentState = {
      name: name.match(/[A-Z]+/i)?.toString() ?? '',
      description: '',
      type,
      args,
    };
    const currentType = schema.getType(currentState.name);
    switch (typeOfOutput) {
      case TypeOfOutput.TYPE: {
        if (currentType instanceof GraphQLScalarType) {
          currentState.description = currentType.description ?? '';
        } else {
          if (
            currentType instanceof GraphQLObjectType ||
            currentType instanceof GraphQLInputObjectType
          ) {
            fields.push(
              ...(Object.entries(
                JSON.parse(JSON.stringify(currentType?.getFields()))
              ) as Array<[string, FieldsData]>)
            );
          }
        }
        addToHistory({
          ...currentState,
          fields,
          typeOfOutput: TypeOfOutput.TYPE,
        });
        break;
      }

      case TypeOfOutput.NAME: {
        addToHistory({
          ...currentState,
          typeOfOutput: TypeOfOutput.NAME,
        });
        break;
      }

      default:
        addToHistory(rootData);
    }
  };

  return (
    <>
      <div>
        {history.length > 1 ? (
          <button onClick={removeFromHistory}>Back</button>
        ) : null}
      </div>

      {history.length === 1 ? (
        <div>
          <div>Docs</div>
          <div>
            A GraphQL schema provides a root type for each kind of operation.
          </div>
          <div>Root type</div>
          <span>query: </span>
          <button
            onClick={() =>
              selectData({
                typeOfOutput: TypeOfOutput.TYPE,
                name: schema.getQueryType()?.name ?? '',
              })
            }
          >
            {schema.getQueryType()?.name}
          </button>
        </div>
      ) : (
        <EditorDocsNonRoot
          {...currentData}
          selectData={selectData}
        />
      )}
    </>
  );
};
