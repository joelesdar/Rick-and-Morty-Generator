import Image from "next/image";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import Character from "./Character";
import Morty from "../public/images/morty.png";

const StyleModal = styled.div`
color: white;

.nav-menu {
  background-color: #060b26;
  width: 350px;
  height: 100vh;
  display: block; 
  position: fixed;
  top: 0;
  right: -100%;
  transition: 850ms;
  overflow-y: scroll;
}

.nav-menu.active {
  right: 0;
  transition: 350ms;
}

.navbar-toggle {
  background-color: #060b26;
  width: 100%;
  height: 80px;
}
`;

const StyledButton = styled.button`
  background-color: #318bbe;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: fixed;
  top: 30px;
  right: 30px;
  border: #39ff14 4px solid;
`;

const Modal = ({characterId, characterList}) => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <StyleModal >
          <StyledButton>
            <a href='#' className='menu-bars' onClick={showSidebar}>
              <Image className="image-button" src={Morty}/>
            </a>
          </StyledButton>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <StyledButton>
            <a href='#' className='menu-bars' onClick={showSidebar}>
              <Image className="image-button" src={Morty}/>
            </a>
          </StyledButton>
            </li>
          </ul>
          <div className="row">
            <div className="col-12">

            {characterList.map(character => (
              <Character generatedId={character} main={false} />
            ))}
            </div>
          </div>
        </nav>
        </StyleModal>  
     );
}
 
export default Modal;