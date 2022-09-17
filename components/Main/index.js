import Image from "next/image";
import React, { useState } from "react";
import { Character } from "../Character";
import { Button } from "../Button";
import Logo from "../../public/images/Logo.png";
import { StyledMain } from "./styles";

let generatedId = 0;
export const Main = ({characterId, characterList, setCharacter, setList}) => {

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const handleNewCharacter = (e) => {
    e.preventDefault();
    generatedId = getRandomInt(1, 827).toString();
    setCharacter(generatedId);
    setList([
      ...characterList,
      characterId
    ]);
  }
  

  return (
    <StyledMain>
      <div className="container">
        <div className="row justify-content-center">
          <div className="logo col-10 col-md-8 col-lg-6">
            <Image src={Logo}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <a href="#" onClick={handleNewCharacter}>
              <Button />
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="landing-character col-12 col-lg-8">
            {generatedId === 0 ?
              <></>
             :
              <Character generatedId={generatedId} main={true}/>
             }
          </div>
        </div>
      </div>
    </StyledMain>
  );
}