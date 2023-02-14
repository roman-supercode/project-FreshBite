import { useRef, useState } from "react";

const Create = () => {
  const nameRef = useRef();
  const catRef = useRef();
  const fileRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const originRef = useRef();
  const quanRef = useRef();
  const ratingRef = useRef();
  const unitRef = useRef();

  // const { postData, data } = useFetch("https://furniture-server-production.up.railway.app/api/furniture", "POST");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = fileRef.current.files[0];

    const fileForm = new FormData();
    fileForm.append("file", file);
    fileForm.append("upload_preset", "gxvi0yf0");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dxiwysn1u/image/upload",
      {
        method: "POST",
        body: fileForm,
      }
    );

    const data = await response.json();
    console.log(data);

    const item = {
      name: nameRef.current.value,
      category: catRef.current.value,
      price: priceRef.current.value,
      description: descRef.current.value,
      origin: originRef.current.value,
      quantity: quanRef.current.value,
      rating: ratingRef.current.value,
      url: data.secure_url,
      unit: unitRef.current.value,
    };

    console.log(item);

    const backendResponse = await fetch(
      "https://grosshop-server.up.railway.app/api/v1/add",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new Prodcut</h2>
      <form className="form">
        <label>
          <span>Name</span>
          <input type="text" name="title" required ref={nameRef} />
        </label>
        <label>
          <span>Price</span>
          <input name="price" type="number" required ref={priceRef} />
        </label>
        <label>
          <span>Origin</span>
          <input name="origin" type="text" required ref={originRef} />
        </label>
        <label>
          <span>quantity</span>
          <input name="quantity" type="text" required ref={quanRef} />
        </label>
        <label>
          <span>Rating</span>
          <input name="rating" type="text" required ref={ratingRef} />
        </label>
        <label>
          <span>Unit</span>
          <select name="unit" ref={unitRef}>
            <option name="unit" value="kg">
              kg
            </option>
            <option name="unit" value="piece">
              piece
            </option>
          </select>
        </label>
        <label></label>
        <label>
          <span>Category</span>
          <select name="category" ref={catRef}>
            <option name="category" value="seafood">
              Seafood
            </option>
            <option name="category" value="fruit">
              Fruits
            </option>
            <option name="category" value="meat">
              Meat
            </option>
            <option name="category" value="vegetable">
              Vegetable
            </option>
            <option name="category" value="bread">
              Bread
            </option>
            <option name="category" value="frozen">
              Frozen
            </option>
            <option name="category" value="organic">
              Organic
            </option>
            <option name="category" value="milk&egg">
              Milk & Eggs
            </option>
          </select>
        </label>
        <br />
        <br />
        <span>Picture</span>
        <br />
        <br />
        <input type="file" name="image" ref={fileRef} />
        <label>
          <span>Description</span>
          <textarea name="text" required ref={descRef} />
        </label>
        <button className="btn" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Create;
