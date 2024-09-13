import { CardPage } from "./products/CardPage";
import { products } from "./data/data";

function App() {
  return (
    <div className="app">
      {products.map((product) => (
        <CardPage
          name={product.name}
          key={product.id}
          image={product.image}
          stars={product.rating.stars}
          count={product.rating.count}
          priceCents={product.priceCents}
          keywords={product.keywords}
        />
      ))}
    </div>
  );
}

export default App;
