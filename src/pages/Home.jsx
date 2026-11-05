import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import Sticker from "../components/Sticker.jsx";
import { featured, products, categories } from "../sample-data/products.js";

export default function Home() {
  const hero = products[0];

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-10 md:grid-cols-12 md:pt-16">
        <div className="md:col-span-7">
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Warm things for ordinary days.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Hoodies, totes, mugs and a few gadgets, all in the colors of late afternoon.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to="/catalog" className="btn btn-primary">Shop everything</Link>
            <a className="btn-quiet font-semibold" href="#popular">See what's popular</a>
          </div>
        </div>

        <Link to={`/product/${hero.slug}`} className="relative block md:col-span-5" aria-label={hero.title}>
          <div className="aspect-square overflow-hidden rounded-full bg-lemon ring-[10px] ring-lemon">
            <img src={hero.image} alt={hero.title} className="h-full w-full object-cover" />
          </div>
          <Sticker
            price={hero.price}
            size="h-24 w-24 text-3xl"
            className="stamp absolute bottom-2 right-0 sm:right-4"
          />
        </Link>
      </section>

      <section id="popular" className="mx-auto max-w-6xl scroll-mt-20 px-4">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-extrabold">Popular right now</h2>
          <Link to="/catalog" className="btn-quiet font-semibold">See all</Link>
        </div>
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(2)]:mt-12">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-4">
        <h2 className="mb-6 font-display text-3xl font-extrabold">Shop by type</h2>
        <ul className="border-t border-leaf/20">
          {categories.map((c) => {
            const n = products.filter((p) => p.category === c).length;
            return (
              <li key={c} className="border-b border-leaf/20">
                <Link
                  to={`/catalog?cat=${encodeURIComponent(c)}`}
                  className="flex items-baseline justify-between gap-4 py-5 font-display text-4xl font-extrabold hover:text-tangerine md:text-6xl"
                >
                  <span>{c}</span>
                  <span className="font-sans text-base font-medium text-muted">
                    {n} {n === 1 ? "item" : "items"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-28 bg-lemon">
        <p className="mx-auto max-w-6xl px-4 py-6 font-display text-xl font-extrabold md:text-2xl">
          Free shipping on orders over $100. Under that, it's a flat $8.
        </p>
      </section>
    </>
  );
}
