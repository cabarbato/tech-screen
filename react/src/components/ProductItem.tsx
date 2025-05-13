import type { Product } from "../context/models";

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="cell card my-3 is-flex is-flex-direction-column is-align-self-stretch">
      <h2 className="card-header p-2 is-flex-grow-1 is-flex-shrink-0">{product.title}</h2>
      <div className="card-content">
        <p>${product.price}</p>
      </div>
      <div className="card-footer is-flex-grow-0 is-flex-shrink-1">
        <button className="button mx-auto my-2">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
