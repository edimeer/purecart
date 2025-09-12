import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <article className="card overflow-hidden group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="aspect-[4/3] bg-orange-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{product.category}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-brand-700 font-semibold">{currency(product.price)}</span>
            {product.badge && <span className="badge">{product.badge}</span>}
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={() => add(product, 1)}
          className="btn btn-brand w-full"
          aria-label={`Add ${product.title} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}