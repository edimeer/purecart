import { currency } from "../utils/format.js";

// Round price label that sits on a product photo.
export default function Sticker({ price, className = "", size = "h-16 w-16 text-lg" }) {
  return (
    <span className={`sticker ${size} ${className}`}>
      <span>{currency(price).replace(/\.00$/, "")}</span>
    </span>
  );
}
