import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });

  const titleChangeHandler = (event) => {
    // setProductName(event.target.value);
    // setProductData({
    //   ...productData,
    //   productName: event.target.value,
    // });
    setProductData((prevState) => {
      return{...prevState, productName: event.target.value}
    })
  };

  const priceChangeHandler = (event) => {
    // setProductPrice(event.target.value);
    // setProductData({
    //   ...productData,
    //   productPrice: event.target.value,
    // });
    setProductData((prevState) => {
      return{...prevState, productPrice: event.target.value}
    })
  };

  const imageChangeHandler = (event) => {
    // setImageUrl(event.target.value);
    // setProductData({
    //   ...productData,
    //  imageUrl: event.target.value,
    // });
    setProductData((prevState) => {
      return{...prevState, imageUrl: event.target.value}
    })
  };

  console.log(productData);

  return (
    <form className="product-form">
      <div className="product-form-input">
        <label>Ürün Adı: {productData.productName}</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı: {productData.productPrice}</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli {productData.imageUrl}</label>
        <input type="text" placeholder="Ürün Görseli Giriniz..." onChange={imageChangeHandler} />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
