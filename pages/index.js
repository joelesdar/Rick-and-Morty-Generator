import Head from "next/head";
import React, {useState} from "react";
import Main from "../components/Main";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const Index = () => {

  const [characterList, setList] = useState([]);
  const [characterId, setCharacter] = useState("");

  return (
    <div>
      <Head>
        <title>Rick and Morty Generator App</title>
      </Head>
      <Modal characterList={characterList} />
      <Main characterId={characterId} characterList={characterList} setCharacter={setCharacter} setList={setList} />
      <Footer />
    </div>
  );
}

export default Index;