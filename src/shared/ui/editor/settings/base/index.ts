export const API_URL = 'https://rickandmortyapi.com/graphql';
export const baseRequest = `query Query {
  characters(page: 2, filter: { name: "Morty" }) {
    results {
      name
    }
  }
}`;
