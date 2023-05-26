/* eslint-disable @typescript-eslint/no-unused-vars */
import { buildClientSchema } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLInputObjectType,
} from 'graphql';
import { useState } from 'react';

import styles from './EditorApiDocs.module.scss';

import { EditorDocsRoot, EditorDocsNonRoot } from '../';

import { TypeOfOutput } from '../types';

import type { CurrentDocData, FieldsData, SelectDataProps } from '../types';
import type { ResponseData } from 'app/types';

type Props = {
  data: ResponseData;
  isFetching: boolean;
  isError: boolean;
};

const EditorApiDocs = ({ data: { data }, isFetching, isError }: Props) => {
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

  if (isFetching || isError) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        {history.length > 1 ? (
          <button onClick={removeFromHistory}>Back</button>
        ) : null}
      </div>

      {history.length === 1 ? (
        <EditorDocsRoot
          {...rootData}
          selectData={selectData}
          schema={schema}
        />
      ) : (
        <EditorDocsNonRoot
          {...currentData}
          selectData={selectData}
        />
      )}
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default EditorApiDocs;
