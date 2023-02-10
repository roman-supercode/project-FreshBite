import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchData } from '../fetchData';

//styles
import './FilterPage.css';

function FilterPage() {
    const navigate = useNavigate();


    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("");
    const [cat, setCat] = useState("");
    let filter;
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://grosshop-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();
    }, []);

    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];

    const veg = products.filter(item => {
        return item.category === "vegetable";
    });

    const fruits = products.filter(item => {
        return item.category === "fruit";
    });

    const meat = products.filter(item => {
        return item.category === "meat";
    });

    const seafood = products.filter(item => {
        return item.category === "seafood";
    });

    const bread = products.filter(item => {
        return item.category === "vegetable";
    });

    const organic = products.filter(item => {
        return item.category === "organic";
    });

    const milkeggs = products.filter(item => {
        return item.category === "milk&egg";
    });
    const frozen = products.filter(item => {
        return item.category === "frozen";
    });

    const apply = () => {
        if (cat === "vegetable" && sort === "lowest") {
            filter = veg.sort((a, b) => {
                return a.price - b.price;
            });
        } else {
            return;
        }
        navigate(`/filtered`, { state: filter });
    };




    return (
        <main>
            <Link to="/filter">Filters</Link>
            <div>
                <p>Sort By</p>
                <button onClick={e => { setSort(e.target.value); }} value={"lowest"} >Lowest</button>
                <button onClick={e => { setSort(e.target.value); }} value={"highest"} >Highest</button>
                <button onClick={e => { setSort(e.target.value); }} value={"best"} >Best</button>
            </div>
            <div>
                <p>Price</p>
                <input type="range" min="0" max="15" />
            </div>
            <p>Category</p>
            <div>
                {
                    updatecat.map((item, index) => {
                        return (
                            <button onClick={e => { setCat(e.target.value); }} value={item[0]} key={index}>
                                {item[0]}
                            </button>
                        );
                    })
                }
            </div>
            <button onClick={apply} type="submit" >Apply</button>
        </main>
    );
}

export default FilterPage;