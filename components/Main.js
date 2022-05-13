import Image from "next/image";
import Character from "./Character";
import Button from "./Button";
import Logo from "../public/images/Logo.png";


const Main = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <Image src={Logo} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <Character />
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <Button />
        </div>
      </div> */}
    </div>
  );
}

export default Main;