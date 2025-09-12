import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function CartDrawer() {
  const { items, remove, update, totals, toggleCart } = useCart();

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop UNDER the panel */}
      <div
        className="absolute inset-0 z-0 bg-black/40"
        onClick={toggleCart}
        aria-hidden="true"
      />

      {/* Panel ABOVE the backdrop */}
      <aside
        className="relative z-10 ml-auto h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <header className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold text-brand-700">Your Cart</h2>
          <button type="button" onClick={toggleCart} className="btn btn-ghost">Close</button>
        </header>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-3">
                <img
                  src={it.image}
                  alt={it.title}
                  className="h-20 w-20 rounded object-cover bg-orange-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{it.title}</h3>
                    <button
                      type="button"
                      onClick={() => remove(it.id)}
                      className="text-sm text-gray-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">{it.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        className="px-2 py-1 rounded bg-gray-100"
                        onClick={() => update(it.id, Math.max(1, it.qty - 1))}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center select-none">{it.qty}</span>
                      <button
                        type="button"
                        className="px-2 py-1 rounded bg-gray-100"
                        onClick={() => update(it.id, it.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold text-brand-700">
                      {currency(it.price * it.qty)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="p-4 border-t space-y-2">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span>{currency(totals.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Shipping</span>
            <span>{totals.subtotal > 100 ? "FREE" : currency(8)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{currency(totals.total)}</span>
          </div>
          <Link to="/checkout" onClick={toggleCart} className="btn btn-brand w-full">
            Go to Checkout
          </Link>
        </footer>
      </aside>
    </div>
  );
}