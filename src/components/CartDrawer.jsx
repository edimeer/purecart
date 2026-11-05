import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function CartDrawer() {
  const { items, remove, update, totals, toggleCart } = useCart();

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && toggleCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleCart]);

  const step = "grid h-8 w-8 place-items-center rounded-sm border border-leaf/40 font-bold hover:bg-lemon";

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 z-0 bg-leaf/50" onClick={toggleCart} aria-hidden="true" />

      <aside
        className="drawer-in relative z-10 ml-auto flex h-full w-full max-w-md flex-col bg-paper shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-leaf/15 p-5">
          <h2 className="font-display text-2xl font-extrabold">Your cart</h2>
          <button type="button" onClick={toggleCart} className="btn-quiet font-semibold">
            Close
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-auto p-5">
          {items.length === 0 ? (
            <div>
              <p className="text-lg font-semibold">Nothing in your cart yet.</p>
              <Link to="/catalog" onClick={toggleCart} className="btn btn-primary mt-4">
                Browse the shop
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-4">
                <img src={it.image} alt={it.title} className="h-24 w-20 rounded-sm bg-pith object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <h3 className="font-display text-lg font-extrabold leading-tight">{it.title}</h3>
                    <button
                      type="button"
                      onClick={() => remove(it.id)}
                      className="text-sm text-muted underline underline-offset-4 hover:text-tangerine"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-sm text-muted">{it.category}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        className={step}
                        onClick={() => update(it.id, Math.max(1, it.qty - 1))}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="min-w-6 select-none text-center font-semibold">{it.qty}</span>
                      <button
                        type="button"
                        className={step}
                        onClick={() => update(it.id, it.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-display text-lg font-extrabold">{currency(it.price * it.qty)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <footer className="space-y-2 border-t border-leaf/15 bg-pith/60 p-5">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{currency(totals.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>{totals.subtotal > 100 ? "Free" : currency(8)}</span>
            </div>
            <div className="flex justify-between font-display text-xl font-extrabold">
              <span>Total</span>
              <span>{currency(totals.total)}</span>
            </div>
            <Link to="/checkout" onClick={toggleCart} className="btn btn-primary w-full">
              Go to checkout
            </Link>
          </footer>
        )}
      </aside>
    </div>
  );
}
