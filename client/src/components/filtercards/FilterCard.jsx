
import './FilterCard.css';

function FilterCard({ item }) {
  return (
    <div className="TodayGroceryDealsCards">
    <span className="cardBilderContainer">
      <img className="cardBilder" src={item.url} alt="Bild"></img>
    </span>
    <span className="name">
      <p>{item.name}</p>
    </span>
    <span className="PriceRating">
      <p>{item.price}$</p>
      <p>⭐️{item.rating}</p>
    </span>
  </div>
  );
}

export default FilterCard;