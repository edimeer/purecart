import { Link, useParams } from "react-router-dom";
import { products } from "../sample-data/products.js";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";
import Sticker from "../components/Sticker.jsx";

export default function Product() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { add } = useCart();

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="font-display text-4xl font-extrabold">We couldn't find that product.</h1>
        <Link to="/catalog" className="btn btn-primary mt-6">Back to the shop</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link to="/catalog" className="btn-quiet text-sm font-semibold">All products</Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-sm bg-pith">
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>
          {product.badge && <span className="pill absolute left-3 top-3">{product.badge}</span>}
          <Sticker price={product.price} size="h-24 w-24 text-3xl" className="absolute -bottom-5 right-4" />
        </div>

        <div className="md:pt-4">
          <p className="text-sm text-muted">{product.category}</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-4 font-display text-2xl font-extrabold">{currency(product.price)}</p>

          <p className="mt-6 max-w-md text-lg">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button onClick={() => add(product, 1)} className="btn btn-primary">Add to cart</button>
            <button onClick={() => add(product, 1)} className="btn-quiet font-semibold">Buy now</button>
          </div>

          <ul className="mt-10 max-w-md border-t border-leaf/20">
            {product.features.map((f, i) => (
              <li key={i} className="border-b border-leaf/20 py-3">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
