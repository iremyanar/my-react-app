const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">Products</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
