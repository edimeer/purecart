import { Link, NavLink } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";

export default function Header() {
  const { items, ui, openCart, toggleCart, totals } = useCart();
  const count = items.reduce((n, it) => n + it.qty, 0);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-orange-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white font-bold shadow-brand">P</div>
            <span className="text-xl font-bold text-brand-700 tracking-tight">PureCart</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink className={({isActive}) => `text-sm ${isActive ? 'text-brand-700 font-semibold' : 'text-gray-600 hover:text-brand-700'}`} to="/catalog">Catalog</NavLink>
            <a href="https://example.com" className="text-sm text-gray-600 hover:text-brand-700" target="_blank" rel="noreferrer">Blog</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label={ui.isCartOpen ? "Close cart" : "Open cart"}
              onClick={toggleCart}
              className="relative btn btn-ghost"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 22a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
              </svg>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 badge">{count}</span>
              )}
            </button>
            <Link to="/checkout" className="btn btn-brand hidden sm:inline-flex">
              Checkout • ${totals.subtotal.toFixed(2)}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}