import { Link } from "react-router-dom";
import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

function Field({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-sm font-semibold">{label}</span>
      <input className="field" required {...props} />
    </label>
  );
}

export default function Checkout() {
  const { items, totals, clear } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! (demo)");
    clear();
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="font-display text-4xl font-extrabold">Your cart is empty.</h1>
        <p className="mt-3 text-muted">Add something to check out.</p>
        <Link to="/catalog" className="btn btn-primary mt-6">Browse the shop</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="font-display text-5xl font-extrabold tracking-tight">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-10">
          <section className="border-t border-leaf/20 pt-5">
            <h2 className="font-display text-2xl font-extrabold">Shipping</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" autoComplete="name" />
              <Field label="Phone" type="tel" autoComplete="tel" />
              <Field label="Address" className="sm:col-span-2" autoComplete="street-address" />
              <Field label="City" autoComplete="address-level2" />
              <Field label="Postal code" autoComplete="postal-code" />
            </div>
          </section>

          <section className="border-t border-leaf/20 pt-5">
            <h2 className="font-display text-2xl font-extrabold">Payment</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Card number" className="sm:col-span-2" inputMode="numeric" autoComplete="cc-number" />
              <Field label="Expiry (MM/YY)" autoComplete="cc-exp" />
              <Field label="CVC" inputMode="numeric" autoComplete="cc-csc" />
            </div>
          </section>

          <button className="btn btn-primary px-8 py-3 text-lg">Pay {currency(totals.total)}</button>
        </form>
      </div>

      <aside className="h-fit rounded-sm bg-pith p-6">
        <h2 className="font-display text-2xl font-extrabold">Your order</h2>
        <div className="mt-5 space-y-4">
          {items.map(it => (
            <div key={it.id} className="flex items-center gap-3 text-sm">
              <img src={it.image} alt="" className="h-16 w-14 rounded-sm bg-paper object-cover" />
              <div className="flex-1">
                <div className="font-semibold">{it.title}</div>
                <div className="text-muted">Qty {it.qty}</div>
              </div>
              <div className="font-semibold">{currency(it.price * it.qty)}</div>
            </div>
          ))}
        </div>
        <div className="mt-5 space-y-1.5 border-t border-leaf/20 pt-4 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{currency(totals.subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{totals.subtotal > 100 ? "Free" : currency(8)}</span></div>
          <div className="flex justify-between pt-2 font-display text-xl font-extrabold"><span>Total</span><span>{currency(totals.total)}</span></div>
        </div>
      </aside>
    </div>
  );
}
