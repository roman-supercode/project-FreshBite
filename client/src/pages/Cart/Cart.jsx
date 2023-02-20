
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import {Quantity} from "../ProductDetail/ProductDetail"
import "./Cart.css";
const Cart = () => {
  const location = useLocation();
  console.log(location);
  let shortCart = location.state;
  const [Quantity, setQuantity] = useState(shortCart.quantity);
  const [Quantity2, setQuantity2] = useState(shortCart.quantity)

  //TODO einkaufs wert der produkte im warenkorb anzeigen lassen (gesamt wert)
  //! inhalt des arrays oder use state zählen und im einkaufs wagen anzeigen kp wie hab gegeoogelt und nur schmutz
  //? Seiten Reloade bugt bzw geht nicht man muss immer zu home zurück FIXED GLAUB ICH
  console.log(shortCart);
  const [data, setData] = useState([]);

  let randomSelection = [];

  useEffect(() => {
    fetch("https://freshbite-server.up.railway.app/api/v1/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data.length === 0) {
    return <h1>hallo</h1>;
  } else {

    console.log(data.length);
    console.log(data);
    randomSelection = data.slice(10, 11);


    return (
      <div className="Cartbody">
        <span className="obenC">
          <Link to="/Home" className="routeLink back">
            <h1 className="pfeil">🔙</h1>    </Link>
          <h1 className="" > My Cart</h1></span>
        {randomSelection.map((shortCartMap) => {
          return (
            <div className="card">
              <input className="radio" type="radio" ></input>
              <span className="innerCard">
                <img src={shortCartMap.url} alt={shortCartMap.name}></img>
                <span className="detailsCart">
                  <h5 className="cartName">{shortCartMap.name}</h5>
                  <span className="UnitUratingCart">
                    <p>{"1 " + shortCartMap.unit.toUpperCase() + "     ⭐️"}</p>
                    <p>  {shortCartMap.rating}</p>
                  </span>
                  <p> ${shortCartMap.price}</p>
                </span>
                <span className="Rechner2">
                  <button onClick={() => {
                    setQuantity2(Quantity2 > 1 ? Quantity2 - 1 : 1);
                  }}>-</button>
                  <span>
                    <p className="mittelTeil" >{Quantity2}</p>
                  </span>
                  <button onClick={() => {
                    setQuantity2(Quantity2 + 1);
                  }} >+
                  </button>
                </span>
              </span>
            </div>
          );
        })}
        <div className="card">
          <input className="radio" type="radio" ></input>
          <span className="innerCard">
            <img src={shortCart.url} alt={shortCart.name}></img>
            <span className="detailsCart">
              <h5 className="cartName">{shortCart.name}</h5>
              <span className="UnitUratingCart">
                <p>{"1 " + shortCart.unit.toUpperCase() + "     ⭐️"}</p>
                <p>  {shortCart.rating}</p>
              </span>
              <p> ${shortCart.price}</p>
            </span>

            <span className="Rechner2">
              <button onClick={() => {
                setQuantity(Quantity > 1 ? Quantity - 1 : 1);
              }}>-</button>
              <span>
                <p className="mittelTeil" >{Quantity + 6}</p>
              </span>
              <button onClick={() => {
                setQuantity(Quantity + 1);
              }} >+
              </button>
            </span>
          </span>
        </div>
      </div>
    );
  }
};
export default Cart;
