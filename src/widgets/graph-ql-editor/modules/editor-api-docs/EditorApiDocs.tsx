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

import type { ResponseData } from 'app/types';

import type { Maybe } from 'graphql/jsutils/Maybe';

type Props = {
  data: ResponseData;
};

type HelperType = 'root' | 'type' | 'name';

type CurrentDocData = {
  name: string;
  type?: string;
  fieldsType?: Maybe<GraphQLObjectType<unknown, unknown>> | GraphQLNamedType;
  fields?: Array<[string, FieldsData]>;
  description: string;
  helperType: HelperType;
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

type HandleClickProps = {
  type?: string;
  args?: { name: string; type: string };
  name: string;
  helperType: HelperType;
};

export const EditorApiDocs = ({ data: { data } }: Props) => {
  const schema = buildClientSchema(data);
  const rootData: CurrentDocData = {
    name: 'Docs',
    fieldsType: schema.getQueryType(),
    description:
      'A GraphQL schema provides a root type for each kind of operation.',
    helperType: 'root',
  };

  const [history, setHistory] = useState<Array<CurrentDocData>>([]);
  const [currentData, setCurrentData] = useState<CurrentDocData>(rootData);

  const { name, fieldsType, description, type } = currentData;

  const addToHistory = (item: CurrentDocData) => {
    setHistory((history) => [...history, item]);
  };

  const removeFromHistory = () => {
    setHistory(([...history]) => {
      history.pop();
      return history;
    });
  };

  const handleClick = ({ type, name, helperType, args }: HandleClickProps) => {
    const currentState = {
      name,
      type,
      fieldsType: schema.getType(name),
      description: '',
    };
    switch (helperType) {
      case 'type': {
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
            setCurrentData({ ...currentState, fields, helperType: 'type' });
            addToHistory(currentData);
          }
        }
        break;
      }

      case 'name': {
        setCurrentData({
          ...currentState,
          helperType: 'name',
        });
        break;
      }

      default:
        setCurrentData(rootData);
    }
  };
  return (
    <div>
      {history.length ? <button>Back</button> : null}
      <h2>{currentData.name}</h2>
      {description && <p>{currentData.description}</p>}
      <p>
        query:
        <button
          onClick={() =>
            handleClick({
              helperType: 'type',
              name: 'Query',
            })
          }
        >
          {'Query'}
        </button>
      </p>
    </div>
  );
};
