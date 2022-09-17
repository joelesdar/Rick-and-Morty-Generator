import styled from "styled-components";

export const StyledModal = styled.div`
 
.background {
  color: white;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

 .nav-menu {
   background-color: #060b26;
   width: 380px;
   height: 100vh;
   display: block; 
   position: fixed;
   top: 0;
   right: -100%;
   transition: 850ms;
   overflow-y: scroll;
   overflow-x: hidden;
   padding: 0;
 }

 .nav-menu.active {
   z-index: 1;
   right: 0;
   transition: 350ms;
   .characters-container {
     padding: 32px 0;
     h2 {
       margin: 16px;
     }
     .character-container {
       width: 70%;
       margin: 2px 0;
     }
     img {
       width: 100%;
     }
     h3 {
       font-size: 1.4rem;
     }
   }
 }

 @media screen and (max-width : 576px) {
   .nav-menu {
     width: 100%;
   }
 }
`;

export const StyledButton = styled.button`
  background-color: #318bbe;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: fixed;
  top: 30px;
  right: 30px;
  border: #39ff14 4px solid;
  padding: 5px;
  z-index: 1;

  @media screen and (max-width : 768px) {
    top: ${props => props.theme.top};
    bottom: ${props => props.theme.bottom};
  }
`; 

export const theme = {
  top: "auto",
  bottom: "112px"
};

export const defaultTheme = {
  top: "30px",
  bottom: "auto"
};