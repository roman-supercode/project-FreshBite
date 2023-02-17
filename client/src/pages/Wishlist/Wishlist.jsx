import GoBackButton from "../../components/GoBack/GoBackButton";
import { useState, useEffect } from "react";
import WishCard from "../../components/WishCard/WishCard";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const url = "http://localhost:9999/api/v1/products/wishlist";
      // const railwayUrl =
      //   "https://freshbite-server.up.railway.app/api/v1/products/wishlist";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);
  return (
    <div>
      <div className="topDiv">
        <GoBackButton />
        <h2>Wunschzettel</h2>
      </div>
      {products.map((product) => {
        return <WishCard key={product._id} product={product} />;
      })}
    </div>
  );
};
export default Wishlist;
