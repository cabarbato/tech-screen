import type { Product } from '../context/models'

const ProductItem = ({product}: {product: Product}) => {

  return (
	<div className="product-item my-8">
	  <h2>{product.title}</h2>
	  <p>${product.price}</p>
	  <button>Add to Cart</button>
	</div>
  )
}

export default ProductItem