import { getRemoteSchema } from 'entities/schema';

export const defaultURL = 'https://rickandmortyapi.com/graphql';
export const defaultSchema = await getRemoteSchema(defaultURL);
