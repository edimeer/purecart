import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { products, categories } from "../sample-data/products.js";

export default function Catalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-brand-700">Catalog</h1>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        <input className="input md:col-span-2" placeholder="Search products…" value={q} onChange={e=>setQ(e.target.value)} />
        <select className="input" value={cat} onChange={e=>setCat(e.target.value)} aria-label="Category">
          <option>All</option>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="input" value={sort} onChange={e=>setSort(e.target.value)} aria-label="Sort by">
          <option value="pop">Popularity</option>
          <option value="new">Newest</option>
          <option value="price-asc">Price (Low→High)</option>
          <option value="price-desc">Price (High→Low)</option>
        </select>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}