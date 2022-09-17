import { gql, useQuery } from "@apollo/client";

export const QUERY = gql`
  query getCharacter($idCharacter: ID!) {
    character(id: $idCharacter) {
      id
      name
      status
      species
      type
      gender
      origin {
        name
      }
      image
      created
    }
  }
`;
