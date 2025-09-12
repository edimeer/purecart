import { useParams } from "react-router-dom";
import { products } from "../sample-data/products.js";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function Product() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { add } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
      <div className="aspect-square rounded-xl overflow-hidden bg-orange-100">
        <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
        <p className="mt-1 text-sm text-gray-600">{product.category}</p>
        <p className="mt-4 text-brand-700 text-2xl font-extrabold">{currency(product.price)}</p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        <div className="mt-6 flex gap-3">
          <button onClick={() => add(product, 1)} className="btn btn-brand">Add to Cart</button>
          <button onClick={() => add(product, 1)} className="btn btn-ghost">Buy Now</button>
        </div>

        <ul className="mt-8 list-disc pl-5 text-sm text-gray-700 space-y-1">
          {product.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>
    </div>
  );
}