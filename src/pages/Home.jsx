import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { featured } from "../sample-data/products.js";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-orange-50 to-white" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <span className="badge">New season</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-800">
            Feel-good shopping, made simple.
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-700">
            PureCart brings a clean, fast buying experience with a sunny orange vibe. Browse curated picks or dive into the full catalog.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/catalog" className="btn btn-brand">Shop the Catalog</Link>
            <a className="btn btn-ghost" href="#featured">Featured</a>
          </div>
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Featured</h2>
          <Link to="/catalog" className="text-brand-700 hover:text-brand-800">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}