export default function Footer() {
  const link = "hover:text-lemon hover:underline underline-offset-4";

  return (
    <footer className="mt-24 bg-leaf text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-sm sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-extrabold">PureCart</h3>
          <p className="mt-3 max-w-xs text-paper/80">Warm things for ordinary days.</p>
        </div>
        <div>
          <h4 className="font-semibold text-lemon">Company</h4>
          <ul className="mt-3 space-y-2">
            <li><a className={link} href="#">About</a></li>
            <li><a className={link} href="#">Careers</a></li>
            <li><a className={link} href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lemon">Help</h4>
          <ul className="mt-3 space-y-2">
            <li><a className={link} href="#">Shipping</a></li>
            <li><a className={link} href="#">Returns</a></li>
            <li><a className={link} href="#">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lemon">Newsletter</h4>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="field !border-paper/40 !bg-paper/10 !text-paper placeholder:!text-paper/60"
              type="email"
              placeholder="you@example.com"
              aria-label="Email address"
            />
            <button className="btn bg-lemon text-leaf hover:bg-tangerine">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-paper/15 py-5 text-center text-xs text-paper/70">
        &copy; {new Date().getFullYear()} PureCart. All rights reserved.
      </div>
    </footer>
  );
}
