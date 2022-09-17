import { StyledFooter } from "./styles";

export const Footer = () => {

    return (
        <StyledFooter className="fixed-bottom">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <p>Created by <a href="https://joelesdar.com/" target="_blank">Joel Esteban Diaz Arévalo</a></p>
                </div>
            </div>
        </StyledFooter>
    );
}