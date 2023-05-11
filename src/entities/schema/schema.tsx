import { getIntrospectionQuery, buildClientSchema } from 'graphql';

const url = 'https://rickandmortyapi.com/graphql';

const getRemoteSchema = async (url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: getIntrospectionQuery(),
    }),
  });
  const json = await response.json();
  return buildClientSchema(json.data);
};

export const remoteSchema = await getRemoteSchema(url);
