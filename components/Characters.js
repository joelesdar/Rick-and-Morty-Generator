import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        status
        gender
        image
      }
    }
  }

`;

const Characters = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const characters = data.characters.results;

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <div key={character.id} className={styles.card}>
          <h3>{character.name}</h3>
          <p>
            {character.gender}
          </p>
          <img src={character.image}></img>
        </div>
      ))}
    </div>
  );
} 

export default Characters;
