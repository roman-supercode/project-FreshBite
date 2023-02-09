import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

// styles
/* import './Create.css'; */

const Create = () => {


    /*  const navigate = useNavigate(); */

    const { postData, data } = useFetch("https://furniture-server-production.up.railway.app/api/furniture", "POST");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        postData(form);



    };

    /*    useEffect(() => {
           if (data) {
               navigate('/');
           }
       }, [data]);
    */
    return (
        <div className='create' >
            <h2 className='page-title' >Add a new Prodcut</h2>
            <form onSubmit={handleSubmit} >
                <label>
                    <span>Title</span>
                    <input
                        type="text"
                        name="title"
                        required
                    />
                </label>
                <label>
                    <span>Price</span>
                    <input
                        name="price"
                        type="number"
                        required
                    />
                </label>
                <label>
                </label>
                <label>
                    <span>Category</span>
                    <select name="category">
                        <option name="category" value="seafood">Seafood</option>
                        <option name="category" value="fruit">Fruits</option>
                        <option name="category" value="meat">Meat</option>
                        <option name="category" value="vegetable">Vegetable</option>
                        <option name="category" value="bread">Bread</option>
                        <option name="category" value="frozen">Frozen</option>
                        <option name="category" value="organic">Organic</option>
                        <option name="category" value="milk&egg">Milk & Eggs</option>
                    </select>
                </label>
                <br />
                <br />
                <span>Picture</span>
                <br />
                <br />
                <input
                    type="file"
                    name="image"
                />
                <label>
                    <span>Description</span>
                    <textarea
                        name="text"
                        required
                    />
                </label>
                <button className='btn' >submit</button>
            </form>
        </div >
    );
};

export default Create;