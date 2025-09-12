import { useCart } from "../state/CartContext.jsx";
import { currency } from "../utils/format.js";

export default function Checkout() {
  const { items, totals, clear } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! (demo)");
    clear();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold text-brand-700">Checkout</h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <section className="card p-4">
            <h2 className="font-semibold text-gray-900">Shipping</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input className="input" placeholder="Full name" required />
              <input className="input" placeholder="Phone" required />
              <input className="input sm:col-span-2" placeholder="Address" required />
              <input className="input" placeholder="City" required />
              <input className="input" placeholder="Postal code" required />
            </div>
          </section>

          <section className="card p-4">
            <h2 className="font-semibold text-gray-900">Payment</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <input className="input sm:col-span-2" placeholder="Card number" required />
              <input className="input" placeholder="MM/YY" required />
              <input className="input" placeholder="CVC" required />
            </div>
          </section>

          <button className="btn btn-brand">Pay {currency(totals.total)}</button>
        </form>
      </div>

      <aside className="card p-4 h-fit">
        <h2 className="font-semibold text-gray-900">Order Summary</h2>
        <div className="mt-4 space-y-3">
          {items.map(it => (
            <div key={it.id} className="flex justify-between gap-3 text-sm">
              <div className="flex-1">
                <div className="font-medium">{it.title}</div>
                <div className="text-gray-500">× {it.qty}</div>
              </div>
              <div className="font-semibold text-brand-700">{currency(it.price * it.qty)}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t pt-4 space-y-1 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{currency(totals.subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{totals.subtotal > 100 ? "FREE" : currency(8)}</span></div>
          <div className="flex justify-between font-semibold text-base"><span>Total</span><span>{currency(totals.total)}</span></div>
        </div>
      </aside>
    </div>
  );
}