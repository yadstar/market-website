const categories = [
  {
    id: "fruits-vegetables",
    name: "Fruits & Vegetables",
    description: "Freshness from the farm",
    color: "#dce789",
  },
  {
    id: "dairy",
    name: "Dairy",
    description: "Everyday chilled essentials",
    color: "#d8e8f5",
  },
  {
    id: "meat-chicken",
    name: "Meat & Chicken",
    description: "Quality cuts, carefully selected",
    color: "#f3c9c0",
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Sip something refreshing",
    color: "#bde0dc",
  },
  {
    id: "snacks",
    name: "Snacks",
    description: "Little cravings, sorted",
    color: "#f7d598",
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Baked fresh every day",
    color: "#e5c8ad",
  },
  {
    id: "frozen-food",
    name: "Frozen Food",
    description: "Easy meals for busy days",
    color: "#c9d8f1",
  },
  {
    id: "cleaning",
    name: "Cleaning",
    description: "A cleaner, brighter home",
    color: "#b9e4dd",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    description: "Feel-good daily care",
    color: "#e8cce2",
  },
  {
    id: "household",
    name: "Household",
    description: "Smart picks for home",
    color: "#d7d2bd",
  },
];

const products = [
  [
    "Sun Gold Tomatoes",
    "fruits-vegetables",
    2.49,
    3.25,
    "per pint",
    "1546094096-0df4bcaaa337",
  ],
  [
    "Heirloom Carrots",
    "fruits-vegetables",
    1.99,
    null,
    "per bunch",
    "1447175008436-054170c2e979",
  ],
  [
    "Sweet Seedless Grapes",
    "fruits-vegetables",
    3.79,
    4.49,
    "500 g pack",
    "1537640538966-79f369143f8f",
  ],
  [
    "Avocados",
    "fruits-vegetables",
    2.99,
    null,
    "4 pack",
    "1523049673857-eb18f1d7b578",
  ],
  ["Whole Milk", "dairy", 2.35, null, "1 litre", "1550583724-b2692b85b150"],
  [
    "Greek Yogurt",
    "dairy",
    4.99,
    5.75,
    "750 g tub",
    "1571212515416-fef01fc43637",
  ],
  [
    "Free Range Eggs",
    "dairy",
    3.89,
    null,
    "12 large eggs",
    "1506976785307-8732e854ad03",
  ],
  [
    "Cheddar Cheese",
    "dairy",
    5.49,
    null,
    "400 g block",
    "1486297678162-eb2a19b0a32d",
  ],
  [
    "Chicken Breast Fillets",
    "meat-chicken",
    7.99,
    9.49,
    "1 kg tray",
    "1604503468506-a8da13d82791",
  ],
  [
    "Lean Beef Mince",
    "meat-chicken",
    8.75,
    null,
    "500 g pack",
    "1602470520998-f4a52199a3d6",
  ],
  [
    "Chicken Drumsticks",
    "meat-chicken",
    5.49,
    null,
    "1 kg tray",
    "1604908176997-4314a5b65219",
  ],
  [
    "Sparkling Mineral Water",
    "drinks",
    3.49,
    null,
    "6 × 330 ml",
    "1550505095-81378a674395",
  ],
  [
    "Fresh Orange Juice",
    "drinks",
    3.99,
    4.75,
    "1 litre",
    "1600271886742-f049cd451bba",
  ],
  [
    "Cola Zero",
    "drinks",
    5.99,
    null,
    "6 × 330 ml",
    "1629203851122-3726ecdf080e",
  ],
  [
    "Sea Salt Crisps",
    "snacks",
    2.19,
    null,
    "150 g bag",
    "1566478989037-eec170784d0b",
  ],
  [
    "Roasted Almonds",
    "snacks",
    5.25,
    6,
    "200 g bag",
    "1508061253366-f7da158b6d46",
  ],
  [
    "Dark Chocolate Bar",
    "snacks",
    2.65,
    null,
    "100 g bar",
    "1575377427642-087cf684f29d",
  ],
  [
    "Country Sourdough",
    "bakery",
    3.75,
    null,
    "fresh baked daily",
    "1509440159596-0249088772ff",
  ],
  [
    "Butter Croissants",
    "bakery",
    4.49,
    5.25,
    "4 pack",
    "1555507036-ab1f4038808a",
  ],
  [
    "Chocolate Muffins",
    "bakery",
    4.25,
    null,
    "4 pack",
    "1607958996333-41aef7caefaa",
  ],
  [
    "Margherita Pizza",
    "frozen-food",
    4.99,
    6.25,
    "390 g",
    "1574071318508-1cdbab80d002",
  ],
  [
    "Frozen Mixed Berries",
    "frozen-food",
    5.79,
    null,
    "500 g bag",
    "1498557850523-fd3d118b962e",
  ],
  [
    "Crispy French Fries",
    "frozen-food",
    3.29,
    null,
    "750 g bag",
    "1630384060421-cb20d0e0649d",
  ],
  [
    "Multi-Surface Cleaner",
    "cleaning",
    3.95,
    null,
    "750 ml spray",
    "1585421514738-01798e348b17",
  ],
  [
    "Laundry Capsules",
    "cleaning",
    8.99,
    10.5,
    "24 washes",
    "1582735689369-4fe89db7114c",
  ],
  [
    "Moisturising Body Wash",
    "personal-care",
    4.65,
    null,
    "500 ml",
    "1608248543803-ba4f8c70ae0b",
  ],
  [
    "Fresh Mint Toothpaste",
    "personal-care",
    2.99,
    3.5,
    "100 ml",
    "1559591935-cd57c1bb4b1f",
  ],
  [
    "Paper Towels",
    "household",
    4.79,
    null,
    "6 roll pack",
    "1583947215259-38e31be8751f",
  ],
  [
    "Bin Bags",
    "household",
    4.25,
    null,
    "30 large bags",
    "1610701596007-11502861dcfa",
  ],
  [
    "Daily Facial Tissues",
    "household",
    2.59,
    null,
    "100 tissues",
    "1583947582886-f40ec95dd752",
  ],
].map(([name, category, price, oldPrice, unit, photo], index) => ({
  id: index + 1,
  name,
  category,
  price,
  oldPrice,
  unit,
  image: `https://images.unsplash.com/photo-${photo}?auto=format&fit=crop&w=600&q=80`,
}));

const CART_STORAGE_KEY = "halabja-market-cart";
let cart = loadCart();
const catalogState = {
  category: "all",
  query: "",
  sort: "featured",
  saleOnly: false,
};
const grid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const filters = document.getElementById("filters");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const loginModal = document.getElementById("loginModal");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("mainNavigation");
const searchInput = document.getElementById("productSearch");
const sortSelect = document.getElementById("sortProducts");
const saleFilter = document.getElementById("saleFilter");
const resultsSummary = document.getElementById("resultsSummary");

const getCategoryName = (id) =>
  categories.find((category) => category.id === id)?.name || "Market";
const getDiscount = (product) =>
  product.oldPrice && Math.round((1 - product.price / product.oldPrice) * 100);

function renderCategories() {
  categoryGrid.innerHTML = categories
    .map(
      (category, index) =>
        `<a href="#shop" class="category-card" data-category="${category.id}" style="--card-color: ${category.color}"><span>${String(index + 1).padStart(2, "0")}</span><h3>${category.name}</h3><p>${category.description}</p><b>→</b></a>`,
    )
    .join("");
}

function renderFilters(activeFilter = catalogState.category) {
  filters.innerHTML = [
    `<button class="${activeFilter === "all" ? "active" : ""}" data-filter="all">All products</button>`,
    ...categories.map(
      (category) =>
        `<button class="${activeFilter === category.id ? "active" : ""}" data-filter="${category.id}">${category.name}</button>`,
    ),
  ].join("");
}

function renderProducts() {
  const searchTerm = catalogState.query.trim().toLowerCase();
  const visibleProducts = products
    .filter(
      (product) =>
        catalogState.category === "all" ||
        product.category === catalogState.category,
    )
    .filter((product) => !catalogState.saleOnly || Boolean(product.oldPrice))
    .filter((product) => product.name.toLowerCase().includes(searchTerm))
    .sort((first, second) => {
      if (catalogState.sort === "price-low") return first.price - second.price;
      if (catalogState.sort === "price-high") return second.price - first.price;
      return first.id - second.id;
    });

  resultsSummary.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"} found`;
  if (!visibleProducts.length) {
    grid.innerHTML = `<div class="empty-results"><strong>No products found</strong><span>Try a different search, category, or filter.</span></div>`;
    return;
  }
  grid.innerHTML = visibleProducts
    .map((product) => {
      const discount = getDiscount(product);
      return `<article class="product-card"><div class="product-image-wrap">${discount ? `<span class="discount-badge">-${discount}%</span>` : ""}<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="product-info"><span class="product-category">${getCategoryName(product.category)}</span><h3>${product.name}</h3><div class="product-bottom"><div class="price-wrap"><span class="price">$${product.price.toFixed(2)}</span>${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ""}<small>${product.unit}</small></div><button class="add-button" data-id="${product.id}" aria-label="Add ${product.name} to cart">Add</button></div></div></article>`;
    })
    .join("");
}

function updateCatalog(category) {
  if (category) catalogState.category = category;
  renderFilters();
  renderProducts();
}

function renderCart() {
  const items = document.getElementById("cartItems");
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal === 0 || subtotal >= 35 ? 0 : 4.99;
  const total = subtotal + delivery;
  document.getElementById("cartCount").textContent = count;
  document.getElementById("panelCount").textContent = count;
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("delivery").textContent =
    delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
  items.innerHTML = cart.length
    ? cart
        .map(
          (item) =>
            `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div class="cart-item-details"><h4>${item.name}</h4><p>$${item.price.toFixed(2)} each</p><div class="quantity-control" aria-label="Quantity for ${item.name}"><button data-decrease="${item.id}" aria-label="Decrease ${item.name} quantity">−</button><span>${item.qty}</span><button data-increase="${item.id}" aria-label="Increase ${item.name} quantity">+</button></div></div><button class="remove-item" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button></div>`,
        )
        .join("")
    : '<p class="empty-cart">Your bag is waiting for something good.</p>';
  saveCart();
}

function addToCart(id) {
  const product = products.find((item) => item.id === Number(id));
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  renderCart();
  showToast(`${product.name} added to your bag`);
}
function updateQuantity(id, change) {
  const item = cart.find((product) => product.id === Number(id));
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) cart = cart.filter((product) => product.id !== item.id);
  renderCart();
}
function loadCart() {
  try {
    const savedCart = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );
    if (!Array.isArray(savedCart)) return [];
    return savedCart
      .map(({ id, qty }) => {
        const product = products.find((item) => item.id === Number(id));
        return product && Number(qty) > 0
          ? { ...product, qty: Number(qty) }
          : null;
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}
function saveCart() {
  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart.map(({ id, qty }) => ({ id, qty }))),
  );
}
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}
function closeAll() {
  cartPanel.classList.remove("open");
  loginModal.classList.remove("show");
  overlay.classList.remove("show");
}
function closeMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
}

grid.addEventListener("click", (event) => {
  if (event.target.matches(".add-button")) addToCart(event.target.dataset.id);
});
filters.addEventListener("click", (event) => {
  if (event.target.matches("button"))
    updateCatalog(event.target.dataset.filter);
});
categoryGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-category]");
  if (card) updateCatalog(card.dataset.category);
});
searchInput.addEventListener("input", () => {
  catalogState.query = searchInput.value;
  updateCatalog();
});
sortSelect.addEventListener("change", () => {
  catalogState.sort = sortSelect.value;
  updateCatalog();
});
saleFilter.addEventListener("click", () => {
  catalogState.saleOnly = !catalogState.saleOnly;
  saleFilter.setAttribute("aria-pressed", String(catalogState.saleOnly));
  updateCatalog();
});
document.getElementById("cartButton").onclick = () => {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
};
document.getElementById("closeCart").onclick = closeAll;
document.getElementById("loginButton").onclick = () => {
  loginModal.classList.add("show");
  overlay.classList.add("show");
};
document.getElementById("closeLogin").onclick = closeAll;
overlay.onclick = closeAll;
menuButton.onclick = () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
};
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.getElementById("cartItems").addEventListener("click", (event) => {
  if (event.target.matches("[data-increase]")) {
    updateQuantity(event.target.dataset.increase, 1);
  } else if (event.target.matches("[data-decrease]")) {
    updateQuantity(event.target.dataset.decrease, -1);
  } else if (event.target.matches("[data-remove]")) {
    cart = cart.filter(
      (item) => item.id !== Number(event.target.dataset.remove),
    );
    renderCart();
  }
});
document.getElementById("continueShopping").onclick = () => {
  closeAll();
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
};
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  closeAll();
  showToast("Welcome back to Halabja!");
});
document.getElementById("viewAllButton").onclick = () => {
  updateCatalog("all");
  document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
};

renderCategories();
updateCatalog("all");
renderCart();
