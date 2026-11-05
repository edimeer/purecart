import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import Sticker from "./Sticker.jsx";

export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <article>
      <Link to={`/product/${product.slug}`} className="group relative block">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-pith">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <Sticker price={product.price} className="absolute -bottom-6 right-3" />
      </Link>

      <div className="mt-8 flex items-start justify-between gap-3 pr-1">
        <div>
          <h3 className="font-display text-xl font-extrabold leading-tight">{product.title}</h3>
          <p className="mt-0.5 text-sm text-muted">{product.category}</p>
        </div>
        {product.badge && <span className="pill">{product.badge}</span>}
      </div>

      <button
        onClick={() => add(product, 1)}
        className="btn btn-primary mt-4 w-full"
        aria-label={`Add ${product.title} to cart`}
      >
        Add to cart
      </button>
    </article>
  );
}
