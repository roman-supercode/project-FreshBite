import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ProductDetail.css";
import shopCard from "../../img/shopCard.svg"
function ProductDetail() {
  const location = useLocation();
  console.log(location);
  let shortCut = location.state;
  const RandomRating = Math.floor(Math.random() * (100 + 699 + 1) + 10);
  const [Quantity, setQuantity] = useState(shortCut.quantity);

  let shopingCardPrice = shortCut.price*Quantity
  return (
    <div className="DetailPPage">
      <span className="obenC">
        <Link className="routeLink back">
          <h1 className="pfeil">🔙</h1>    </Link>
        <h1 className="GDeals" > Grocery Deals</h1></span>
      <span className="detailCard">
        <img src={shortCut.url} alt={shortCut.name}></img>
        <p className="UNIT">{shortCut.quantity + shortCut.unit.toUpperCase()}</p>
        <h2 className="PRICE"> ${shortCut.price}</h2>
        <h4 className="THINGnAME">{shortCut.name}</h4>
        <span className="NameAndRating"> <p className="RATING"> ⭐️ {shortCut.rating} {"  ( " + RandomRating + " ) Review"}</p></span>
      </span>
      <span className="Quantity">
        <span> <h1 className="Q">Quantity</h1></span>
        <span className="Rechner"><button onClick={() => {
          setQuantity(Quantity>1?Quantity-1:1)
        }}
          id="M" className="PMBTN">➖</button>
          <span className="mittel">
          <h1>{Quantity}   {shortCut.unit.toUpperCase()}</h1>
          <p>{"( "+shopingCardPrice.toFixed(2)+"$ )"}</p></span>
          <button onClick={() => {
            setQuantity(Quantity + 1);
          }}
            id="P" className="PMBTN" >➕</button>
        </span>
        <span className="shopCard">
          <p className="shCardQuantity">{Quantity}</p>
          <img className="shopCardImg" src={shopCard} alt="ShopCard"/>
        
        </span>
        
      </span>
    </div>
  );
}

export default ProductDetail;