import { useEffect, useState } from "react";
import zwanzigProzent from "../../img/zwanzigProzent.png";
import pommes from "../../img/pommes.png";
import "./Home.css"
import { Link } from "react-router-dom";
const Home = () => {
    const [data, setData] = useState([]);
    const randomSelection =[]
    const randomSelection2 =[]
    useEffect(() => {
        fetch('https://grosshop-server.up.railway.app/api/v1/products')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
if(data.length === 0){
    return
}else{
    console.log(data.length);


    for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
        randomSelection.push(data[randomIndex])
      }
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
            randomSelection2.push(data[randomIndex])
          }
}
    return (
        <div>
            <span className="head">
            <Link to="/filterpage">    <button  className="FilterBtn" > Filter</button></Link>

                <img className="sale" src={zwanzigProzent} alt="20% off" />
            </span>

            <span className="TGDeals">
                <h1 className="ueberschreift">Today Grocery Deals</h1>
            

{

randomSelection.map((datas , i)=>{
        return(
        <div className="TodayGroceryDealsCards" key={i}>
            <span className="cardBilderContainer" >
            <img className="cardBilder" src={datas.url} alt="Bild"></img>
            </span>
            <span className="name">
           <p>{datas.name}</p> </span>
           <span className="PriceRating">
           <p>{datas.price}$</p> 
           <p>⭐️{datas.rating}</p> </span>
        </div>
     ) })
}
<span>
                </span>
            </span>

<img  className="pommes" src={pommes} alt='Pommes'></img>
<span className="TGDeals">
                <h1 className="ueberschreift"> Grocery Member Deals</h1>
            

{

randomSelection2.map((datas , i)=>{
        return(
        <div className="GroceryMemberDealsCards" key={i}>
            <span className="cardBilderContainer" >
            <img className="cardBilder" src={datas.url} alt="Bild"></img>
            </span>
            <span className="name">
           <p>{datas.name}</p> </span>
           <span className="PriceRating">
           <p>{datas.price}$  </p> 
           <p> {Math.floor(datas.price)/2}$</p>
           <p>⭐️{datas.rating}</p> </span>
        </div>
     ) })
}
<span>
                </span>
            </span>








        </div>
    );
};
export default Home;