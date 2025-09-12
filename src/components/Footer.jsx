export default function Footer() {
  return (
    <footer className="mt-16 border-t border-orange-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-brand-700">PureCart</h3>
          <p className="mt-2 text-gray-600">
            A minimal, fast e-commerce starter in React + Tailwind.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a className="hover:text-brand-700" href="#">About</a></li>
            <li><a className="hover:text-brand-700" href="#">Careers</a></li>
            <li><a className="hover:text-brand-700" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Help</h4>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a className="hover:text-brand-700" href="#">Shipping</a></li>
            <li><a className="hover:text-brand-700" href="#">Returns</a></li>
            <li><a className="hover:text-brand-700" href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Newsletter</h4>
          <form className="mt-2 flex gap-2">
            <input className="input" placeholder="you@example.com" aria-label="Email" />
            <button className="btn btn-brand">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PureCart. All rights reserved.
      </div>
    </footer>
  );
}