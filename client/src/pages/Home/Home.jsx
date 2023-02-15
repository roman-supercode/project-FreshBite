import { useEffect, useState } from "react";
import zwanzigProzent from "../../img/zwanzigProzent.png";
import zwanzigZ from "../../img/Z.png";
import pommes from "../../img/pommes.png";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const randomSelection = [];
  const randomSelection2 = [];
  useEffect(() => {
    fetch("https://freshbite-server.up.railway.app/api/v1/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data.length === 0) {
    return;
  } else {
    console.log(data.length);
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomSelection.push(data[randomIndex]);
    }
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      randomSelection2.push(data[randomIndex]);
    }
  }
  return (
    <div className="HomePage">

      <span className="head">

          <button className="FilterBtn">        <Link className="routeLink filterContainer" to="/filterpage2">  </Link>
          </button>
      
        <div className="carousel">
          <div className="carousel-item">
            <img className="sale" src={zwanzigProzent} alt="20% off" />
          </div>
          <div className="carousel-item">
            <img className="sale" src={zwanzigZ} alt="20% off" />
          </div>
        </div>
      </span>

      <span className="TGDeals">
        <h1 className="ueberschreift">Today Grocery Deals</h1>

        {randomSelection.map((datas, i) => {
          return (
            <Link state={datas} to={`/item/`} className="TodayGroceryDealsCards" key={i} >
              <span className="cardBilderContainer">
                <img className="cardBilder" src={datas.url} alt="Bild"></img>
              </span>
              <span className="name">
                <p>{datas.name}</p>
              </span>
              <span className="PriceRating">
                <p>{datas.price}$</p>
                <p>⭐️{datas.rating}</p>
              </span>
            </Link>
          );
        })}
        <span></span>
      </span>

      <img className="pommes" src={pommes} alt="Pommes"></img>
      <span className="TGDeals">
        <h1 className="ueberschreift"> Grocery Member Deals</h1>

        {randomSelection2.map((datas, i) => {
          return (
            <Link state={datas} to={"/item/"} className="GroceryMemberDealsCards" key={i}>
              <span className="cardBilderContainer">
                <img className="cardBilder" src={datas.url} alt="Bild"></img>
              </span>
              <span className="name">
                <p>{datas.name}</p>
              </span>
              <span className="PriceRating">
                <p className="oldPrice">{datas.price}$ </p>
                <p className="salePrice"> {Math.floor(datas.price) / 2}$</p>
                <p>⭐️{datas.rating}</p>
              </span>
            </Link>
          );
        })}
        <span></span>
      </span>
    </div>
  );
};
export default Home;
