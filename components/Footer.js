import Image from "next/image";
import Blockdemy from "../public/images/Logo-Blockdemy.svg";
import styled from "styled-components";

const StyledFooter = styled.div`
    background: #000;
    padding: 16px 0;
    text-align: center;
    z-index: 0;
    p {
        display: inline;
        margin: auto 0;
    }
    .blockdemy {
        display: inline;
    }
`;

const Footer = () => {

    return (
        <StyledFooter className="fixed-bottom">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <p>Powered by </p>
                    <Image className="blockdemy" src={Blockdemy} width="200px" height="50px" />
                </div>
            </div>
        </StyledFooter>
    );
}

export default Footer;