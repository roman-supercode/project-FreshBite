import star from "../../assets/star.svg";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import "./ProductCard.css";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFav);

  // Favorite(Wishlist)
  const toggleFavorite = async () => {
    try {
      const url = `http://localhost:9999/api/v1/products/item/${product._id}/fav`;
      const response = await fetch(url, {
        method: "POST",
      });
      const data = await response.json();
      setIsFavorite(data.isFav);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="TodayGroceryDealsCards">
      {/* <Link to={`/item/${product._id}`} className="TodayGroceryDealsCards"> */}
      <span className="cardBilderContainer">
        <img className="cardBilder" src={product.url} alt="Bild"></img>
      </span>
      <span className="name">
        <p>{product.name}</p>
      </span>
      <span className="PriceRating">
        <p>{product.price}€</p>
        <span>
          <img src={star} alt="star" />
          <p>{product.rating}</p>
        </span>
        <div onClick={toggleFavorite} className="like-btn">
          {isFavorite ? <FcLike /> : <FaRegHeart />}
        </div>
      </span>
      {/* </Link> */}
    </div>
  );
};
export default ProductCard;
