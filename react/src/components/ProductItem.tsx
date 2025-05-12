import type { Product } from "../context/models";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="cell card my-3">
      <h2 className="card-header p-2">{product.title}</h2>
      <div className="card-content">
        <p>${product.price}</p>
      </div>
      <div className="card-footer">
        <button className="button mx-auto my-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
