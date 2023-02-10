

//styles
import './FilterCard.css';

function FilterCard({ item }) {
  return (
    <div>
      <img src={item.url} alt="product image" />
      <h1>{item.name}</h1>
      <p>{item.price}€</p>
      <p>{item.rating}⭐</p>
    </div>
  );
}

export default FilterCard;