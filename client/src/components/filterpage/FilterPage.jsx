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
    const [price, setPrice] = useState(5);


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
        return item.category === "bread";
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
        } else if (cat === "vegetable" && sort === "highest") {
            filter = veg.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "vegetable" && sort === "best") {
            filter = veg.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "fruit" && sort === "lowest") {
            filter = fruits.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "fruit" && sort === "highest") {
            filter = fruits.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "fruit" && sort === "best") {
            filter = fruits.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "meat" && sort === "lowest") {
            filter = meat.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "meat" && sort === "highest") {
            filter = meat.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "meat" && sort === "best") {
            filter = veg.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "seafood" && sort === "lowest") {
            filter = seafood.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "seafood" && sort === "highest") {
            filter = seafood.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "seafood" && sort === "best") {
            filter = seafood.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "bread" && sort === "lowest") {
            filter = bread.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "bread" && sort === "highest") {
            filter = bread.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "bread" && sort === "best") {
            filter = bread.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "organic" && sort === "lowest") {
            filter = organic.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "organic" && sort === "highest") {
            filter = organic.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "organic" && sort === "best") {
            filter = organic.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "milk&egg" && sort === "lowest") {
            filter = milkeggs.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "milk&egg" && sort === "highest") {
            filter = milkeggs.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "milk&egg" && sort === "best") {
            filter = milkeggs.sort((a, b) => {
                return b.rating - a.rating;
            });
        }
        else if (cat === "frozen" && sort === "lowest") {
            filter = frozen.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "frozen" && sort === "highest") {
            filter = frozen.sort((a, b) => {
                return b.price - a.price;
            });
        }
        else if (cat === "frozen" && sort === "best") {
            filter = frozen.sort((a, b) => {
                return b.rating - a.rating;
            });
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
                <p>{price}</p>
                <input onChange={e => { setPrice(e.target.value); }} type="range" step="0.1" min="0" max="15" value={price} />
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