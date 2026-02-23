import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { ShoppingCart, ShoppingBag, Trash2, CheckCircle, Filter, Star, ArrowLeft } from 'lucide-react';
import { CartProvider, useCart } from './CartContext';

// --- 1. DATA GENERATOR (100 ITEMS) ---
const CATEGORIES = ["Electronics", "Fashion", "Home", "Sports", "Toys"];

// Helper to generate 100 realistic products
const generateProducts = () => {
  const products = [];
  const adjectives = ["Premium", "Durable", "Stylish", "Compact", "Luxury", "Modern", "Classic", "Pro", "Smart", "Ultra"];
  
  const categoryItems = {
    Electronics: ["Headphones", "Smart Watch", "Laptop", "Camera", "Speaker", "Monitor", "Keyboard", "Mouse", "Tablet", "Drone"],
    Fashion: ["Jacket", "Sneakers", "T-Shirt", "Jeans", "Watch", "Sunglasses", "Backpack", "Hat", "Boots", "Scarf"],
    Home: ["Lamp", "Chair", "Rug", "Vase", "Clock", "Cushion", "Desk", "Mirror", "Planter", "Shelf"],
    Sports: ["Yoga Mat", "Dumbbell", "Racket", "Ball", "Helmet", "Gloves", "Jersey", "Bottle", "Skateboard", "Bike"],
    Toys: ["Robot", "Doll", "Puzzle", "Car", "Block Set", "Plushie", "Drone", "Action Figure", "Board Game", "Art Set"]
  };

  const images = {
    Electronics: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=500&q=60",
    Fashion: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=500&q=60",
    Home: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=500&q=60",
    Sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&q=60",
    Toys: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=500&q=60"
  };

  for (let i = 1; i <= 100; i++) {
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    const items = categoryItems[category];
    const itemName = items[Math.floor(Math.random() * items.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    products.push({
      id: i,
      name: `${adjective} ${itemName} ${i}`, // e.g., "Premium Headphones 1"
      category: category,
      price: Math.floor(Math.random() * 200) + 20, // Random price between 20 and 220
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating 3.0 to 5.0
      img: images[category], // Using stable category images
      description: `Experience the best quality with our ${adjective} ${itemName}. Perfect for daily use and designed to last. This is item number ${i} in our exclusive collection.`
    });
  }
  return products;
};

const PRODUCTS = generateProducts();

// --- 2. COMPONENTS ---

// Navbar
const Navbar = () => {
  const { cart } = useCart();
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500 flex items-center gap-2">
          <ShoppingBag /> MegaMart
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-orange-400 font-medium">Store</Link>
          <Link to="/cart" className="relative hover:text-orange-400 flex items-center gap-1">
            <ShoppingCart />
            <span className="font-bold">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Store Page (Home)
const StorePage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 bg-white p-6 shadow-md md:h-screen md:sticky md:top-20 z-0">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
          <Filter size={20} /> Categories
        </h2>
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
          <button
              onClick={() => setSelectedCategory("All")}
              className={`text-left px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === "All" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Products
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-left px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === cat ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{selectedCategory} Products ({filteredProducts.length})</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group border border-gray-100">
              
              {/* LINK TO DETAILS PAGE */}
              <Link to={`/product/${product.id}`}>
                <div className="h-60 w-full bg-white flex items-center justify-center p-4 relative cursor-pointer">
                   <img 
                    src={product.img} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </Link>

              <div className="p-4 flex flex-col flex-1 bg-gray-50">
                <span className="text-xs text-orange-500 font-bold uppercase mb-1">{product.category}</span>
                <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-800 mb-1 hover:text-orange-600">{product.name}</h3>
                </Link>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-500 font-medium">${product.price}</p>
                    <div className="flex items-center text-yellow-500 text-sm">
                        <Star size={14} fill="currentColor" /> {product.rating}
                    </div>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-orange-500 transition active:scale-95 font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

// --- NEW: PRODUCT DETAILS PAGE ---
const ProductDetailsPage = () => {
    const { id } = useParams(); // Get the ID from the URL
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Find the specific product
    const product = PRODUCTS.find(p => p.id === parseInt(id));

    // Scroll to top when page opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="text-center mt-20 text-2xl">Product not found!</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start pt-10">
            <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">
                
                {/* Left: Image */}
                <div className="md:w-1/2 bg-gray-50 p-10 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="max-h-96 w-full object-contain mix-blend-multiply" />
                </div>

                {/* Right: Info */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                    <button onClick={() => navigate(-1)} className="text-gray-500 flex items-center gap-2 mb-6 hover:text-orange-500">
                        <ArrowLeft size={20} /> Back to Store
                    </button>
                    
                    <span className="text-orange-500 font-bold uppercase tracking-wide">{product.category}</span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                        <div className="flex items-center text-yellow-500 bg-yellow-50 px-2 py-1 rounded">
                            <Star size={18} fill="currentColor" /> 
                            <span className="ml-1 font-bold text-gray-700">{product.rating} (124 reviews)</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {product.description}
                    </p>

                    <div className="flex gap-4">
                        <button 
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg"
                        >
                            Add to Cart
                        </button>
                        <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:border-gray-800 transition">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Cart Page
const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-xl mb-6">Your cart is empty.</p>
            <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">Go Shopping</Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b py-4 last:border-none">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center p-2">
                        <img src={item.img} alt={item.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-2"><Trash2 /></button>
                </div>
              ))}
            </div>
            <div className="md:w-80 bg-white rounded-xl shadow-lg p-6 h-fit">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Summary</h3>
              <div className="flex justify-between mb-2 text-gray-600"><span>Subtotal</span><span>${totalPrice}</span></div>
              <div className="flex justify-between mb-4 text-gray-600"><span>Shipping</span><span>Free</span></div>
              <div className="border-t pt-4 flex justify-between items-center mb-6"><span className="text-xl font-bold text-gray-800">Total</span><span className="text-2xl font-bold text-orange-500">${totalPrice}</span></div>
              <button onClick={() => navigate('/checkout')} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Checkout Page
const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 1500);
  };

  if (cart.length === 0) return <div className="text-center mt-20">Cart is empty! <Link to="/" className="text-blue-500">Go Back</Link></div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Checkout</h2>
        <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-700 mb-2">Order Summary</h3>
            <p className="text-gray-600">Items: {cart.length}</p>
            <p className="text-xl font-bold text-orange-600">Total to Pay: ${totalPrice}</p>
        </div>
        <form onSubmit={handlePayment} className="flex flex-col gap-4">
            <div><label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label><input required type="text" className="w-full border p-3 rounded-lg outline-none focus:border-blue-500" placeholder="John Doe" /></div>
            <div><label className="block text-gray-700 text-sm font-bold mb-2">Address</label><textarea required className="w-full border p-3 rounded-lg outline-none focus:border-blue-500" placeholder="123 Main St..." /></div>
            <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 mt-2">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

// Success Page
const SuccessPage = () => (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center p-6 text-center">
        <CheckCircle size={80} className="text-green-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-xl text-gray-600 mb-8">Thank you for your order.</p>
        <Link to="/" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600">Continue Shopping</Link>
    </div>
);

// --- 3. MAIN ROUTING ---
function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          {/* NEW ROUTE FOR PRODUCT DETAILS */}
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;