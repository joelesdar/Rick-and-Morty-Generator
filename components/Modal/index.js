import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import { Character } from "../Character";
import Morty from "../../public/images/morty.png";
import { ThemeProvider } from "styled-components";
import { StyledModal, StyledButton, theme, defaultTheme } from "./styles";


export const Modal = ({characterId, characterList}) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (  
        <StyledModal>
          <ThemeProvider theme={theme}>
            <StyledButton>
              <a href='#' onClick={showSidebar}>
                <Image src={Morty}/>
              </a>
            </StyledButton> 
          </ThemeProvider>
        <div className={sidebar ? "background" : ""}></div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ThemeProvider theme={sidebar ? defaultTheme : theme}>
            <StyledButton>
            <a href='#' onClick={showSidebar}>
              <Image src={Morty}/>
            </a> 
          </StyledButton>
        </ThemeProvider>
            <div className="characters-container">
          <h2>History</h2>
            {characterList.map(character => (
              <Character generatedId={character} main={false} />
              ))}
            </div>
        </nav>
        </StyledModal>  
     );
}