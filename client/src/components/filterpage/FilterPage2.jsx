import React, { useState, useEffect } from 'react';
import { fetchData } from '../fetchData';
import { Link, useNavigate } from 'react-router-dom';
import MultiRangeSlider from "multi-range-slider-react";

import './Slider.css';



const Filter = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await fetchData("https://freshbite-server.up.railway.app/api/v1/products");

            setProducts(products);
        };
        fetchProducts();
    }, []);

    // duplikate entfernen
    const dupcat = [...new Map(products.map((p) => [p.category]))];
    const updatecat = [...new Map(dupcat.map((i) => i))];

    const [categoryFilter, setCategoryFilter] = useState('');
    const [minValue, set_minValue] = useState(2);
    const [maxValue, set_maxValue] = useState(15);
    const [sortOrder, setSortOrder] = useState('');

    const apply = (event) => {
        setCategoryFilter(event.target.value);
        //setPriceFilter(value);
        setSortOrder(event.target.value);
        set_minValue(event.minValue);
        set_maxValue(event.maxValue);


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
            if (minValue && maxValue === 0) {
                return true;
            }
            return product.price <= maxValue && product.price >= minValue;
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
            <div>
                <div className="range">
                    <MultiRangeSlider
                        min={2}
                        max={16}
                        step={1}
                        minValue={minValue}
                        maxValue={maxValue}
                        barInnerColor="rgb(19, 209, 187)"
                        onInput={(e) => {
                            apply(e);
                        }}
                    />
                    <h1>minValue: {minValue}</h1>
                    <h1>maxValue: {maxValue}</h1>
                </div>
            </div>
            <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
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






{/* <p>Min {priceFilter}</p>
<input
    type="range"
    min="0"
    max="15"
    step="0.1"
    value={priceFilter}
    onChange={e => setPriceFilter(e.target.value)}
/> */}