import ProductCard, { type Product } from "../components/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-fidelity sound",
    price: "$99.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness",
    price: "$199.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Coffee Maker",
    description: "Brew the perfect cup",
    price: "$49.99",
    image: "https://via.placeholder.com/150",
  },
];

export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">
        Welcome to our Store!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
