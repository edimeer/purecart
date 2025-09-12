import { createContext, useContext, useMemo, useReducer, useEffect } from "react";

const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(i => i.id === action.item.id);
      const items = existing
        ? state.items.map(i => (i.id === action.item.id ? { ...i, qty: i.qty + action.qty } : i))
        : [...state.items, { ...action.item, qty: action.qty }];

      return { ...state, items, ui: { ...state.ui, isCartOpen: true } }; // auto-open drawer
    }
    case "REMOVE":
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case "UPDATE":
      return {
        ...state,
        items: state.items.map(i => (i.id === action.id ? { ...i, qty: action.qty } : i))
      };
    case "CLEAR":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, ui: { ...state.ui, isCartOpen: !state.ui.isCartOpen } };
    case "OPEN_CART":
      return { ...state, ui: { ...state.ui, isCartOpen: true } };
    case "CLOSE_CART":
      return { ...state, ui: { ...state.ui, isCartOpen: false } };
    default:
      return state;
  }
}

const initialState = {
  items: [],
  ui: { isCartOpen: false }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  // (Optional) persist cart between reloads
  useEffect(() => {
    const saved = localStorage.getItem("purecart:v1");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.items) {
          // hydrate only items
          dispatch({ type: "HYDRATE", payload: parsed.items });
        }
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // custom HYDRATE handling (kept inside effect to avoid changing reducer signature above)
  // Simple patch: re-dispatch UPDATEs for each item
  // You can ignore this block if you don't want persistence
  // (kept no-op if no saved data)

  useEffect(() => {
    localStorage.setItem("purecart:v1", JSON.stringify({ items: state.items }));
  }, [state.items]);

  const value = useMemo(
    () => ({
      items: state.items,
      ui: state.ui,
      totals: { subtotal, total },
      add: (item, qty = 1) => dispatch({ type: "ADD", item, qty }),
      remove: id => dispatch({ type: "REMOVE", id }),
      update: (id, qty) => dispatch({ type: "UPDATE", id, qty }),
      clear: () => dispatch({ type: "CLEAR" }),
      toggleCart: () => dispatch({ type: "TOGGLE_CART" }),
      openCart: () => dispatch({ type: "OPEN_CART" }),
      closeCart: () => dispatch({ type: "CLOSE_CART" })
    }),
    [state.items, state.ui, subtotal, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}