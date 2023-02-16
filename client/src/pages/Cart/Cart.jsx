
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import {Quantity} from "../ProductDetail/ProductDetail"
import "./Cart.css"
const Cart = () => {
  const location = useLocation();
  console.log(location);
  let shortCart = location.state;

  const [Quantity2, setQuantity] = useState(shortCart.Quantity);

//TODO produkte im array oder use state übergenen und drüber map()
//TODO einkaufs wert der produkte im warenkorb anzeigen lassen (gesamt wert)
//! inhalt des arrays oder use state zählen und im einkaufs wagen anzeigen kp wie hab gegeoogelt und nur schmutz
//? Seiten Reloade bugt bzw geht nicht man muss immer zu home zurück FIXED GLAUB ICH
  return (
  <div className="Cartbody">
          <span className="obenC">
        <Link to="/Home" className="routeLink back">
          <h1 className="pfeil">🔙</h1>    </Link>
        <h1 className="" > My Cart</h1></span>
        <div className="card">
          <input className="radio" type="radio" ></input>
          <span className="innerCard">
  <img src={shortCart.url} alt={shortCart.name}></img>
  <span className="detailsCart">
  <h5 className="cartName">{shortCart.name}</h5>

  <span className="UnitUratingCart">
    <p>{"1 "  +shortCart.unit.toUpperCase()+"     ⭐️"}</p>
    <p>  {shortCart.rating}</p></span>
    <p> ${shortCart.price}</p>
</span>

    <span className="Rechner2">
      <button onClick={() => {
      setQuantity(Quantity2 > 1 ? Quantity2 - 1 : 1);
    }}>-</button>
      <span>
        <p className="mittelTeil" >{Quantity2}</p>
        </span>
      <button onClick={() => {
        setQuantity(Quantity2 + 1);
      }} >+
        </button>
    </span>
    </span>
    </div>
</div>
  ) };
export default Cart;
