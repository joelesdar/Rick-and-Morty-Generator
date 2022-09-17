import { useQuery } from "@apollo/client";
import QUERY from "../../utils/query";
import { StyledCharacter } from "./styles";


export const Character = ({generatedId, main}) => {
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
  
  return (
    <StyledCharacter>
        <div key={character.id} className="row align-items-center justify-content-evenly">
          <div className="character-container col-8 col-md-6 col-xl-5">
                <img className="character-image" src={character.image}></img>
          </div>
          <div className="col-8 col-md-6 col-xl-5">

            <h3>{character.name}</h3>
            {
              main ? (
                <div>
                  <p>Status: {character.status}</p>
                  <p>Species: {character.species}</p>
                  <p>Type: {character.type == "" ? "Unknown" : character.type}</p>
                  <p>Origin: {character.origin.name}</p>
                  <p>Created At: {date.toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'})}</p>
                </div>
              ) :
              <></>
            }
          </div>
          
        </div>
    </StyledCharacter>
  );
} 
