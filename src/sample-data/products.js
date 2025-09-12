export const categories = ["Apparel", "Accessories", "Home", "Gadgets"];

export const products = [
  {
    id: 1,
    slug: "sunset-hoodie",
    title: "Sunset Hoodie",
    price: 59,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    description:
      "Cozy mid-weight hoodie in a warm orange gradient. Perfect for cool evenings.",
    features: ["Cotton blend", "Regular fit", "Machine washable"],
    badge: "Popular",
    pop: 97,
    created: new Date("2025-03-15").getTime(),
  },
  {
    id: 2,
    slug: "citrus-tote",
    title: "Citrus Canvas Tote",
    price: 24,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    description: "Durable tote with reinforced straps and a citrus print.",
    features: ["Heavy canvas", "Inner pocket", "Eco-friendly inks"],
    badge: "New",
    pop: 75,
    created: new Date("2025-07-01").getTime(),
  },
  {
    id: 3,
    slug: "ember-mug",
    title: "Ember Ceramic Mug",
    price: 18,
    category: "Home",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    description: "Matte ceramic mug with a heat-retaining design.",
    features: ["12oz", "Dishwasher safe", "Matte glaze"],
    badge: "Limited",
    pop: 82,
    created: new Date("2025-05-22").getTime(),
  },
  {
    id: 4,
    slug: "glow-watch",
    title: "Glow Smartwatch",
    price: 149,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop",
    description: "Slim smartwatch with AMOLED display and 7-day battery.",
    features: ["AMOLED display", "Heart rate", "Water resistant"],
    pop: 90,
    created: new Date("2025-02-10").getTime(),
  },
  {
    id: 5,
    slug: "tangerine-sneakers",
    title: "Tangerine Sneakers",
    price: 89,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    description: "Breathable mesh upper with responsive cushioning.",
    features: ["Lightweight", "Breathable mesh", "Rubber outsole"],
    pop: 88,
    created: new Date("2025-04-28").getTime(),
  },
  {
    id: 6,
    slug: "amber-headphones",
    title: "Amber Wireless Headphones",
    price: 129,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1518441902113-c1d3b5a1a3a4?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable over-ear headphones with noise isolation.",
    features: ["30h battery", "Bluetooth 5.3", "Foldable"],
    pop: 86,
    created: new Date("2025-06-05").getTime(),
  },
];

export const featured = products.slice(0, 3);
