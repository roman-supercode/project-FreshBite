import { useState, useEffect, useRef } from 'react';
import { fetchData } from '../fetchData';
import FilterCard from '../filtercards/FilterCard';

// styles
import './Filter.css';


const Filter = () => {
    const [products, setProducts] = useState([]);
    const [cat, setCat] = useState("");
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://grosshop-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();
    }, []);

    //duplicate aus category entfernen
    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];
    //console.log(updatecat);

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
    return (
        <main>
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
            <div>
                {cat === "" && <section> {products.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "vegetable" && <section> {veg.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "fruit" && <section> {fruits.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "meat" && <section> {meat.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "seafood" && <section> {seafood.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "bread" && <section> {bread.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "organic" && <section> {organic.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "milk&egg" && <section> {milkeggs.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
            <div>
                {cat === "frozen" && <section> {frozen.map((item, index) => {
                    return (
                        <div key={index} >
                            <FilterCard item={item} />
                        </div>
                    );
                })} </section>}
            </div>
        </main >
    );
};

export default Filter;