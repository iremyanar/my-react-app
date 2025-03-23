import ProductItem from "./ProductItem";
import "./Product.css";
import { productsData } from "../../productData";
import NewProduct from '../NewProduct/NewProduct';

const Products = () => {
  return (
    <div className="product-wrapper">
      <NewProduct />
      <h1>Products</h1>
      <div className="products">
        {productsData.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
