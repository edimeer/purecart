import { Link, NavLink } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function Header() {
  const { items, ui, toggleCart, totals } = useCart();
  const count = items.reduce((n, it) => n + it.qty, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-leaf/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="h-7 w-7 rounded-full bg-tangerine ring-4 ring-lemon" aria-hidden="true" />
            <span className="font-display text-2xl font-extrabold tracking-tight">PureCart</span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                `font-semibold underline-offset-8 decoration-2 decoration-tangerine hover:underline ${isActive ? "underline" : ""}`
              }
            >
              Shop
            </NavLink>

            <button
              onClick={toggleCart}
              aria-label={ui.isCartOpen ? "Close cart" : `Open cart, ${count} items`}
              className="inline-flex items-center gap-2 font-semibold underline-offset-8 decoration-2 decoration-tangerine hover:underline"
            >
              Cart
              <span
                className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 text-xs font-bold ${count > 0 ? "bg-lemon" : "bg-pith"}`}
              >
                {count}
              </span>
            </button>

            <Link to="/checkout" className="btn btn-primary hidden sm:inline-flex">
              Checkout {count > 0 && currency(totals.subtotal)}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
