import type { Product } from "./context/models";
import ProductItem from "./components/ProductItem";
import CartView from "./views/CartView";
import Provider from "./context/Provider";

const products: Product[] = [
  {
    id: 168,
    title: "Charger SXT RWD",
    price: 32999.99,
    quantity: 1,
    total: 32999.99,
    discountPercentage: 0,
    discountedTotal: 0,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
  },
  {
    id: 78,
    title: "Apple MacBook Pro 14 Inch Space Grey",
    price: 1999.99,
    quantity: 1,
    total: 1999.99,
    discountPercentage: 0,
    discountedTotal: 0,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },
  {
    id: 183,
    title: "Green Oval Earring",
    price: 24.99,
    quantity: 1,
    total: 24.99,
    discountPercentage: 0,
    discountedTotal: 0,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
  },
  {
    id: 100,
    title: "Apple Airpods",
    price: 129.99,
    quantity: 1,
    total: 129.99,
    discountPercentage: 0,
    discountedTotal: 0,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },
];

function App() {
  return (
    <Provider>
      <div className="columns">
        <div className="column grid is-align-content-flex-start">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
        <div className="column">
          <CartView />
        </div>
      </div>
    </Provider>
  );
}

export default App;
