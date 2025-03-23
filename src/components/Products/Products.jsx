import ProductItem from "./ProductItem";
import "./Product.css";
import { productsData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  console.log(products);

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
