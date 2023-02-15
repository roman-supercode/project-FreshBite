import { Link } from "react-router-dom";
import "../ProdoctT.css";

function Welcome() {
  return (
    <div>
      <div className="AfterScreen">
        <div className="logo">
          <span className="svG"></span>
          <span className="svGschrift"></span>
        </div>
        <span className="buttonContainer">
          <Link to="login" className="Afb">
            Einloggen
          </Link>
          <Link to="register" className="Afb">
            Registriern
          </Link>
          <Link className="Afb" to="/Home">
            Weiter als Gast?
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Welcome;
