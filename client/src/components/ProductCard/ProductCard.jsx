import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.fav);

  // Favorite(Wishlist)
  const toggleFavorite = async () => {
    try {
      const url = `http://localhost:9999/api/v1/products/item/${product._id}/fav`;
      const response = await fetch(url, {
        method: "POST",
      });
      const data = await response.json();
      setIsFavorite(data.fav);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="TodayGroceryDealsCards">
      {/* <Link
        //   state={datas}
        to={`/item/`}
        className="TodayGroceryDealsCards"
        //   key={i}
      > */}
      <span className="cardBilderContainer">
        <img className="cardBilder" src={product.url} alt="Bild"></img>
      </span>
      <span className="name">
        <p>{product.name}</p>
      </span>
      <span className="PriceRating">
        <p>{product.price}$</p>
        <p>⭐️{product.rating}</p>
        <button onClick={toggleFavorite}>{isFavorite ? "🧡" : "🤍"}</button>
      </span>
      {/* </Link> */}
    </div>
    // <div className="product-card">
    //   <div className="product-name">{product.name}</div>
    //   <div className="product-image">
    //     <img src={product.url} alt={product.name} />
    //   </div>
    //   <div className="product-price">{product.price} €</div>
    //   <button onClick={toggleFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
    // </div>
  );
};
export default ProductCard;
