import Character from "./Character";
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-lg-4">
        <h1 className="">Rick and Morty Generator</h1>
          <Character />
        </div>
      </div>
    </div>
  );
}

export default Main;