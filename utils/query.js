import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
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

export default QUERY;
