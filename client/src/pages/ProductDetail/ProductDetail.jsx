import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductDetail.css";
function ProductDetail() {
  const location = useLocation();
  console.log(location);
  let shortCut = location.state;
  const RandomRating = Math.floor(Math.random() * (100 + 699 + 1) + 10);
  const [Quantity, setQuantity] = useState(shortCut.quantity);

  let shopingCardPrice = shortCut.price * Quantity;
  return (
    <div className="DetailPPage">
      <span className="obenC">
        <Link to="/Home" className="routeLink back">
          <h1 className="pfeil">🔙</h1>    </Link>
        <h1 className="GDeals" > Grocery Deals</h1></span>
      <span className="detailCard">
      <span className=" imgContainer">  <img src={shortCut.url} alt={shortCut.name}></img></span>
        <div className="PuT">  <p className="UNIT">{shortCut.quantity + shortCut.unit.toUpperCase()}</p>
     
        <h2 className="PRICE"> ${shortCut.price}</h2></div>

        <h4 className="THINGnAME">{shortCut.name}</h4>
        <span className="NameAndRating"> <p className="RATING"> ⭐️ {shortCut.rating} {"  ( " + RandomRating + " ) Review"}</p></span>
      </span>
      <span className="Quantity">
        <span> <h1 className="Q">Quantity</h1></span>
        <span className="Rechner"><button onClick={() => {
          setQuantity(Quantity > 1 ? Quantity - 1 : 1);
        }}
          id="M" className="PMBTN">➖</button>
          <span className="mittel">
        <p className="zuLang">{Quantity}{shortCut.unit.toUpperCase()}</p>
            <p>{"( " + shopingCardPrice.toFixed(2) + "$ )"}</p></span>
          <button onClick={() => {
            setQuantity(Quantity + 1);
          }}
            id="P" className="PMBTN" >➕</button>
        </span>
        <span className="shopCard">
  <Link state={shortCut} valueOf={Quantity} to={`/cart`}  > <button onClick={() => {
         setQuantity(1);
       }} className="Add">Add to Cart <p className="shCardQuantity">{Quantity}</p></button> </Link>  
        </span>

      </span>
    </div>
  );
}
export default ProductDetail ;