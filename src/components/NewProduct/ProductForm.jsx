import "./ProductForm.css";

const ProductForm = () => {
  return (
    <form className="product-form">
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input type="text" placeholder="Ürün Adı Giriniz..." />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input type="number" placeholder="Ürün Fiyatı Giriniz..." />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input type="text" placeholder="Ürün Görseli Giriniz..." />
      </div>
      <button className="product-form-button">Ürün adı giriniz</button>
    </form>
  );
};

export default ProductForm;
