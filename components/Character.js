import { gql, useQuery } from "@apollo/client";
import QUERY from "./query";
import styled from "styled-components";

// const theme = {
//   main: {
//     radius: '100%',
//   },
//   sidebar: {
//     radius: '60%',
//   }
// }

const StyledCharacter = styled.div`

  .character-image {
    border-radius: 100%;
    border: #318bbe 5px solid;
  }

  `;

const Character = ({generatedId, main}) => {
  const { data, loading, error } = useQuery(QUERY,
    {variables : {idCharacter : generatedId}});

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const character = data.character;
  let date = new Date(character.created);

  const Body = () => {
    if(main) {
      console.log(main);
      return (
        <div>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {character.type == "" ? "Unknown" : character.type}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Created At: {date.toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'})}</p>
          </div>
    )}
  }
  
  return (
    <StyledCharacter className="">
      {/* <ThemeProvider theme={theme}> */}
        <div key={character.id} className="row align-items-center justify-content-evenly">
          <div className="col-8 col-md-6 col-xl-5">
                <img className="character-image" src={character.image}></img>
          </div>
          <div className="col-8 col-md-6 col-xl-5">

            <h3>{character.name}</h3>
            <Body main={main}/>
          </div>
          
        </div>
        {/* </ThemeProvider> */}
    </StyledCharacter>
  );
} 

export default Character;
