import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { products, categories } from "../sample-data/products.js";

export default function Catalog() {
  const [params] = useSearchParams();
  const initialCat = categories.includes(params.get("cat")) ? params.get("cat") : "All";

  const [q, setQ] = useState("");
  const [cat, setCat] = useState(initialCat);
  const [sort, setSort] = useState("pop");

  const filtered = useMemo(() => {
    let data = [...products];
    if (cat !== "All") data = data.filter(p => p.category === cat);
    if (q.trim()) {
      const t = q.toLowerCase();
      data = data.filter(p => p.title.toLowerCase().includes(t));
    }
    switch (sort) {
      case "price-asc": data.sort((a,b)=>a.price-b.price); break;
      case "price-desc": data.sort((a,b)=>b.price-a.price); break;
      case "new": data.sort((a,b)=>b.created - a.created); break;
      default: data.sort((a,b)=>b.pop - a.pop);
    }
    return data;
  }, [q, cat, sort]);

  const chip = (active) =>
    `rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
      active ? "border-leaf bg-leaf text-paper" : "border-leaf/40 hover:bg-lemon"
    }`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-5xl font-extrabold tracking-tight">Shop</h1>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Category">
        {["All", ...categories].map((c) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={chip(cat === c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <input
          className="field sm:col-span-2"
          type="search"
          placeholder="Search by name"
          aria-label="Search products"
          value={q}
          onChange={e=>setQ(e.target.value)}
        />
        <select className="field" value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort by">
          <option value="pop">Most popular</option>
          <option value="new">Newest</option>
          <option value="price-asc">Price, low to high</option>
          <option value="price-desc">Price, high to low</option>
        </select>
      </div>

      <p className="mt-8 text-sm text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "product" : "products"}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6">
          <p className="text-lg font-semibold">No products match that search.</p>
          <button
            type="button"
            className="btn-quiet mt-2 font-semibold"
            onClick={() => { setQ(""); setCat("All"); }}
          >
            Clear search and filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
