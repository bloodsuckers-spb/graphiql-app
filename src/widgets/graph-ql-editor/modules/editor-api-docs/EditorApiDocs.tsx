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
import { EditorDocsRoot } from '../editor-docs-root';

import { TypeOfOutput } from '../types';

import type { ResponseData } from 'app/types';

type Props = {
  data: ResponseData;
};

export type CurrentDocData = {
  typeOfOutput: TypeOfOutput;
  name: string;
  description: string;
  type?: string;
  fields?: Array<[string, FieldsData]>;
  args?: FieldArgs[];
};

type FieldsData = {
  args: FieldArgs[];
  name: string;
  type: string;
  description: string;
};

type FieldArgs = {
  name: string;
  type: string;
};

export type OnClickProps = Omit<CurrentDocData, 'description' | 'fields'>;

export const EditorApiDocs = ({ data: { data } }: Props) => {
  const schema = buildClientSchema(data);
  const rootData: CurrentDocData = {
    name: '',
    description: '',
    typeOfOutput: TypeOfOutput.ROOT,
  };

  const [history, setHistory] = useState<Array<CurrentDocData>>([]);
  const [currentData, setCurrentData] = useState<CurrentDocData>(rootData);

  const addToHistory = (item: CurrentDocData) => {
    setHistory((history) => [...history, item]);
  };

  const handleClick = ({ name, typeOfOutput, type, args }: OnClickProps) => {
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
        setCurrentData({
          ...currentState,
          fields,
          typeOfOutput: TypeOfOutput.TYPE,
        });
        addToHistory(currentData);
        break;
      }

      case TypeOfOutput.NAME: {
        setCurrentData({
          ...currentState,
          typeOfOutput: TypeOfOutput.NAME,
        });
        addToHistory(currentData);
        break;
      }

      default:
        setCurrentData(rootData);
        addToHistory(currentData);
    }
  };

  const removeFromHistory = (currentData: CurrentDocData) => {
    setHistory(([...history]) => {
      history.pop();
      return history;
    });
    handleClick(currentData);
  };

  return (
    <>
      <div>
        {history.length ? (
          <button
            onClick={() => removeFromHistory(history[history.length - 1])}
          >
            Back
          </button>
        ) : null}
      </div>

      {!history.length ? (
        <EditorDocsRoot
          {...rootData}
          schema={schema}
          handleClick={handleClick}
        />
      ) : (
        <EditorDocsNonRoot
          {...currentData}
          handleClick={handleClick}
        />
      )}
    </>
  );
};
