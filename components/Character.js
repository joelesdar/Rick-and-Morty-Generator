import { useQuery, gql, Mutation } from "@apollo/client";
import styled from "styled-components";

const StyledCharacter = styled.div`
  .character-image {
    border-radius: 100%;
    border: #318bbe 5px solid;
  }
  `;

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

let generateId = getRandomInt(1, 827).toString();

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
      episode {
        name
      }
      created
    }
  }
`;

const Character = (idCharacter) => {
  const { data, loading, error } = useQuery(QUERY,
    {variables : {idCharacter : generateId}});

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const character = data.character;
  let date = new Date(character.created);

  return (
    <StyledCharacter className="">
        <div key={character.id} className="row align-items-center justify-content-evenly">
          <div className="col-8 col-md-6 col-xl-5">
            <img className="character-image" src={character.image}></img>
          </div>
          <div className="col-8 col-md-6 col-xl-5">
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type == "" ? "Unknown" : character.type}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Created At: {date.toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'})}</p>
          </div>
        </div>
    </StyledCharacter>
  );
} 

export default Character;
