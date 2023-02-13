import React, { useState, useEffect } from 'react';
import { fetchData } from '../fetchData';
import { Link, useNavigate } from 'react-router-dom';



const Filter = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://grosshop-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();
    }, []);

    // duplikate entfernen
    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];

    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState(0);
    const [sortOrder, setSortOrder] = useState('');

    const apply = (event, value) => {
        setCategoryFilter(event.target.value);
        setPriceFilter(value);
        setSortOrder(event.target.value);


        navigate(`/filtered`, { state: filteredProducts });
    };

    const filteredProducts = products
        .filter((product) => {
            if (categoryFilter === '') {
                return true;
            }
            return product.category === categoryFilter;
        })
        .filter((product) => {
            if (priceFilter === 0) {
                return true;
            }
            return product.price <= priceFilter;
        })
        .sort((a, b) => {
            if (sortOrder === 'lowest') {
                return a.price - b.price;
            } else if (sortOrder === 'highest') {
                return b.price - a.price;
            } else if (sortOrder === 'best') {
                return b.rating - a.rating;
            }
        });

    return (
        <div>
            <div>
                {
                    updatecat.map((item, index) => {
                        return (
                            <button onClick={e => { setCategoryFilter(e.target.value); }} value={item[0]} key={index}>
                                {item[0]}
                            </button>
                        );
                    })
                }
            </div>
            <p>Min {priceFilter[0]}</p>
            <input
                type="range"
                min="0"
                max="15"
                step="0.1"
                value={priceFilter[0]}
                onChange={e => setPriceFilter(e.target.value)}
            />
            <p>Max {priceFilter[1]}</p>
            <input
                type="range"
                min="0"
                max="15"
                step="0.1"
                value={priceFilter[1]}
                onChange={e => setPriceFilter(e.target.value)}
            />
            <select value={sortOrder} onClick={e => setSortOrder(e.target.value)}>
                <option value="">Sort By</option>
                <option value="lowest">Lowest Price</option>
                <option value="highest">Highest Price</option>
                <option value="best">Best Rating</option>
            </select>
            <div>
                <button onClick={apply} type="submit" >Apply</button>
            </div>
        </div>

    );
};

export default Filter;
