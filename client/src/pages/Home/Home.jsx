import { useEffect, useState } from "react";
import zwanzigProzent from "../../img/zwanzigProzent.png";
import zwanzigZ from "../../img/Z.png";
import pommes from "../../img/pommes.png";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  // const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
 //  const [isFavorite, setIsFavorite] = useState(data.fav);

  let randomSelection = [];
  let randomSelection2 = [];

  useEffect(() => {

    // const fetchProducts = async () => {
    //   const url = "http://localhost:9999/api/v1/products";
    //   const railwayUrl =
    //     "https://freshbite-server.up.railway.app/api/v1/products";
    //   try {
    //     const response = await fetch(railwayUrl);
    //     const data = await response.json();
    //     setProducts(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };


    // fetch("https://freshbite-server.up.railway.app/api/v1/products")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, []);
  // console.log(products);

  if (data.length === 0) {
    return;
  } else {
    console.log(data.length);
    console.log(data);

    randomSelection = data.slice(0, 10);
    randomSelection2 = data.slice(10, 18);


  return (
    <div className="HomePage">
      <span className="head">
        <Link className="routeLink filterContainer" to="/filterpage2">
          <button className="FilterBtn"></button> <h1 className="
          GanzOben">Wilkommen</h1><p id="BenutzerName"></p>
        </Link>

        <div className="carousel">
          <div className="carousel-item">
            <img className="sale" src={zwanzigProzent} alt="20% off" />
          </div>
          <div className="carousel-item">
            <img className="sale" src={zwanzigZ} alt="20% off" />
          </div>
        </div>
      </span>

      <h1 className="ueberschreift">Today Grocery Deals</h1>
      <span className="ZGDeals food-cards-container">
        {products.map((product) => {
          {
            /* {randomSelection.map((datas, i) => { */
          }

          return (
            <ProductCard key={product._id} product={product} />

            <Link
              state={datas}
              to={`/item`}
              className="TodayGroceryDealsCards"
              key={i}
            >
              <span className="cardBilderContainer">
                <img className="cardBilder" src={datas.url} alt="Bild"></img>
              </span>
              <span className="name">
                <p className="name2">{datas.name}</p>
              </span>
              <span className="PriceRating">
                <p className="PriceRating2" >{datas.price}$</p>
                <p className="PriceRating2" >⭐️{datas.rating}</p>
              {/* <button onClick={toggleFavorite}>
                  {isFavorite ? "🧡" : "🤍"} 
                 </button>  */}
              </span>
            </Link>

          );
        })}
      </span>

      <img className="pommes" src={pommes} alt="Pommes"></img>

      <h1 className="ueberschreift"> Grocery Member Deals</h1>
      <span className="GMDeals">
        {randomSelection2.map((datas, i) => {
          return (
            <Link
              state={datas}
              to={"/item"}
              className="GroceryMemberDealsCards"
              key={i}
            >
              <span className="cardBilderContainer">
                <img className="cardBilder" src={datas.url} alt="Bild"></img>
              </span>
              <span className="name">
                <p className="name2" >{datas.name}</p>
                <p className="PriceRating2" >⭐️{datas.rating}</p>
              </span>
              <span className="PriceRating">
                <p className="oldPrice PriceRating2">{datas.price}$ </p>
                <p className="salePrice PriceRating2"> {Math.floor(datas.price) / 2}$</p>
              </span>
            </Link>
          );
        })}
      </span>
    </div>
  );
      }
    };
export default Home;
