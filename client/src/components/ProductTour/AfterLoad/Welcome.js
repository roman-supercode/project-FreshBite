import { Link } from "react-router-dom";
import "../ProdoctT.css";
function Welcome() {
    return (
        <div className="AfterScreen">
            <div className="logo">
                <span className="svG"></span>
                <span className="svGschrift"></span></div>
            <span className="buttonContainer">
                <button className="Afb" >Sign in</button>
                <button className="Afb" >Create An Accout</button>
                <Link className="routeLink" to="/Home">  <button className="Afb"  >Weiter als Gast?</button></Link>
                </span>
        </div>
    );
}
export default Welcome;