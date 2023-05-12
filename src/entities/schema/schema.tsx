import { getIntrospectionQuery, buildClientSchema } from 'graphql';

export const getRemoteSchema = async (url: string) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variables: {},
      query: getIntrospectionQuery(),
    }),
  });
  const json = await response.json();
  console.log(response);
  return buildClientSchema(json.data);
};
