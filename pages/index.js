import Head from "next/head";
import styles from "../styles/Home.module.css";
import Characters from "../components/Characters";

const Index = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty Generator App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Rick and Morty Generator</h1>

        <div className={styles.grid}>
          <Characters />
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}

export default Index;