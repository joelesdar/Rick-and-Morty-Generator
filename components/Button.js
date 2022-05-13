import Image from "next/image";
import ButtonBox from "../public/images/Button.png";

const Button = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-8 col-lg-6">
          <Image src={ButtonBox} />
        </div>
      </div>
    </div>
  );
}

export default Button;