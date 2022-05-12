import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';

const StyledCharacter = styled.div`
`;

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const QUERY = gql`
  query getCharacter {
    character(id: "2") {
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
      episode {
        name
      }
      created
    }
  }
`;

const Character = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const character = data.character;

  return (
    <StyledCharacter className="">
        <div key={character.id} className="">
          <img src={character.image}></img>
          <h3>{character.name}</h3>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Type: {character.type}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Created At: {character.created}</p>
        </div>
    </StyledCharacter>
  );
} 

export default Character;
