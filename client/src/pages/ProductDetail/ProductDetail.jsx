import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./ProductDetail.css";

import shopCard from "../../img/shopCard.svg";

function ProductDetail() {

  const { id } = useParams();
  const [detail, setDetail] = useState();
  useEffect(() => {
    fetch(`https://freshbite-server.up.railway.app/api/v1/products/item/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((DetailRes) => {
        setDetail(DetailRes);
        console.log(DetailRes);
      });

  }, []);



  const RandomRating = Math.floor(Math.random() * (100 + 699 + 1) + 10);
  const [Quantity, setQuantity] = useState(detail?.quantity);

  let shopingCardPrice = detail?.price * Quantity;

// import shopCard from "../../img/shopCard.svg";

function ProductDetail() {
  const [Quantity, setQuantity] = useState(shortCut.quantity);


  return (
    <div className="DetailPPage">
      <span className="obenC">
        <Link to="/Home" className="routeLink back">
          <h1 className="pfeil">🔙</h1>
        </Link>
        <h1 className="GDeals" > Grocery Deals</h1></span>
      <span className="detailCard">
        <span className=" imgContainer">  <img src={detail?.url} alt={detail?.name}></img></span>
        <div className="PuT">  <p className="UNIT">{detail?.quantity + detail?.unit.toUpperCase()}</p>

          <h2 className="PRICE"> ${detail?.price}</h2></div>
        <h4 className="THINGnAME">{detail?.name}</h4>
        <span className="NameAndRating">
          {" "}
          <p className="RATING">
            {" "}
            ⭐️ {detail?.rating} {"  ( " + RandomRating + " ) Review"}
          </p>
        </span>
      </span>
      <span className="Quantity">
        <span> <h1 className="Q">Quantity</h1></span>
        <span className="Rechner"><button onClick={() => {
          setQuantity(Quantity > 1 ? Quantity - 1 : 1);
        }}
          id="M" className="PMBTN">➖</button>
          <span className="mittel">
            <p className="zuLang">{Quantity}{detail?.unit.toUpperCase()}</p>
            <p>{"( " + shopingCardPrice.toFixed(2) + "$ )"}</p></span>
          <button onClick={() => {
            setQuantity(Quantity + 1);
          }}
            id="P" className="PMBTN" >➕</button>
        </span>
        <span className="shopCard">
          <Link /* state={datas} */ valueOf={Quantity} to={`/cart`}  > <button onClick={() => {
            setQuantity(1);
          }} className="Add">Add to Cart <p className="shCardQuantity">{Quantity}</p></button> </Link>
        </span>

      </span>
    </div>
  );
}

export default ProductDetail;