import star from "../../assets/star.svg";
import trash from "../../assets/trash.svg";
import check from "../../assets/check.svg";
import uncheck from "../../assets/uncheck.svg";
import "./WishCard.css";
import { useState } from "react";

const WishCard = ({ product }) => {
  const [status, setStatus] = useState(product.isFav);

  return (
    <div className="wishCard">
      <div onClick={() => setStatus(!product.isFav)}>
        <img src={status ? check : uncheck} />
      </div>
      <div className="wishImgContainer">
        <img src={product.url} alt={product.name} className="wishImg" />
      </div>
      <div className="wishContainer">
        <h2>{product.name}</h2>
        <div>
          <p>
            {product.packUnit}
            {product.unit}
          </p>
          <img src={star} alt="star icon" />
          <p>
            {product.rating} ({product.numReviews})
          </p>
          <div className="wishTrash">
            <img src={trash} alt="trashcan icon" />
          </div>
        </div>
        <h4>{product.price}€</h4>
      </div>
    </div>
  );
};
export default WishCard;
