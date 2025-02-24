// import { Card } from "primereact/card";
// import "./Style/ProductsDetails.css";
// import Yagya from "../Images/Yagya.jpg";
// import reiki from "../Images/reiki.jpg";
// import gemstone from "../Images/gemstone.jpg";
// import rudraksha from "../Images/Rudraksha.jpg";
// import Yantra from "../Images/Yantra.jpg";
// import Kawach from "../Images/kawach.webp";
// import faceReading from "../Images/faceReading.png";
// import evilEye from "../Images/evilEye.png";
// import { useNavigate } from "react-router-dom";

// // Define Product Type
// type Product = {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
// };

// // Product Data
// const products: Product[] = [
//   { id: 1, name: "Evil Eye Removal Collection", price: "$29.99", image: evilEye },
//   { id: 2, name: "Astrology Chart Reading", price: "$49.99", image: Yagya },
//   { id: 3, name: "Crystal Healing Set", price: "$39.99", image: reiki },
//   { id: 4, name: "Moon Phase Tapestry", price: "$24.99", image: gemstone },
//   { id: 5, name: "Zodiac Bracelet", price: "$19.99", image: rudraksha },
//   { id: 6, name: "Astrology Guide Book", price: "$34.99", image: Yantra },
//   { id: 7, name: "Tarot Card Deck", price: "$22.99", image: Kawach },
//   { id: 8, name: "Healing Crystals", price: "$18.99", image: faceReading },
// ];

// export default function AstrologyGrid() {
//   const navigate = useNavigate();

//   // ✅ Fix: Explicitly define `product` type
//   const handleCardClick = (product: Product) => {
//     navigate(`/SubProductsDetails/${product.id}`, { state: { product } });
//   };

//   return (
//     <> 
//       <div className="productsdetails_Heading">
//         <div className="search-container">
//           <h2 className="productsdetails_title">Shop Best Online Astrology Products</h2>
//           <input type="text" className="products_search_input" placeholder="Search here..." />
//         </div>
//       </div>

//       <div className="products_details_container">
//         {products.map((product) => (
//           <div key={product.id} className="clickable-card" onClick={() => handleCardClick(product)}>
//             <Card className="product_details">
//               <img 
//                 src={product.image} 
//                 alt={product.name} 
//                 className="product_details_img" 
//                 loading="lazy"
//               />
//               <div className="product_info">
//                 <p className="product_name">{product.name}</p>
//                 <p className="product_price">{product.price}</p>
//               </div>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }




// --------------------------------

import { Card } from "primereact/card";
import "./Style/ProductsDetails.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample product images
import Yagya from "../Images/Yagya.jpg";
import reiki from "../Images/reiki.jpg";
import gemstone from "../Images/gemstone.jpg";
import rudraksha from "../Images/Rudraksha.jpg";
import Yantra from "../Images/Yantra.jpg";
import Kawach from "../Images/kawach.webp";
import faceReading from "../Images/faceReading.png";
import evilEye from "../Images/evilEye.png";

// Define Product Type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  offer?: string;
  popularity: number;
};

// Sample Product Data
const productsData: Product[] = [
  { id: 1, name: "Evil Eye Removal Collection", price: 29.99, image: evilEye, category: "Protection", rating: 4.5, offer: "10% off", popularity: 90 },
  { id: 2, name: "Astrology Chart Reading", price: 49.99, image: Yagya, category: "Consultation", rating: 4.8, popularity: 95 },
  { id: 3, name: "Crystal Healing Set", price: 39.99, image: reiki, category: "Healing", rating: 4.2, offer: "15% off", popularity: 80 },
  { id: 4, name: "Moon Phase Tapestry", price: 24.99, image: gemstone, category: "Decor", rating: 4.0, popularity: 70 },
  { id: 5, name: "Zodiac Bracelet", price: 19.99, image: rudraksha, category: "Accessories", rating: 3.9, popularity: 65 },
  { id: 6, name: "Astrology Guide Book", price: 34.99, image: Yantra, category: "Books", rating: 4.6, popularity: 85 },
  { id: 7, name: "Tarot Card Deck", price: 22.99, image: Kawach, category: "Divination", rating: 4.3, popularity: 75 },
  { id: 8, name: "Healing Crystals", price: 18.99, image: faceReading, category: "Healing", rating: 4.1, popularity: 60 },
];

export default function AstrologyGrid() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(productsData);
  const [sortOption, setSortOption] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [cart, setCart] = useState<Product[]>([]);

  // Handle product click
  const handleCardClick = (product: Product) => {
    navigate(`/SubProductsDetails/${product.id}`, { state: { product } });
  };

  // Handle sorting
  const handleSortChange = (option: string) => {
    setSortOption(option);
    let sortedProducts = [...products];

    if (option === "low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "popularity") {
      sortedProducts.sort((a, b) => b.popularity - a.popularity);
    }

    setProducts(sortedProducts);
  };

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "") {
      setProducts(productsData);
    } else {
      setProducts(productsData.filter((product) => product.category === category));
    }
  };

  // Handle add to cart
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <div className="productsdetails_Heading">
        <div className="search-container">
          <h2 className="productsdetails_title">Shop Best Online Astrology Products</h2>
          <input type="text" className="products_search_input" placeholder="Search here..." />
        </div>

        {/* Sorting Options */}
        <div className="sort-filter-container">
          <select onChange={(e) => handleSortChange(e.target.value)} value={sortOption} className="sort-dropdown">
            <option value="">Sort By</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>

          {/* Category Filter */}
          <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} className="category-dropdown">
            <option value="">Filter by Category</option>
            <option value="Protection">Protection</option>
            <option value="Consultation">Consultation</option>
            <option value="Healing">Healing</option>
            <option value="Decor">Decor</option>
            <option value="Accessories">Accessories</option>
            <option value="Books">Books</option>
            <option value="Divination">Divination</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products_details_container">
        {products.map((product) => (
          <div key={product.id} className="clickable-card">
            <Card className="product_details" onClick={() => handleCardClick(product)}>
              <img src={product.image} alt={product.name} className="product_details_img" loading="lazy" />
              <div className="product_info">
                <p className="product_name">{product.name}</p>
                <p className="product_price">${product.price.toFixed(2)}</p>
                {product.offer && <span className="product_offer">{product.offer}</span>}
                <p className="product_rating">⭐ {product.rating} / 5</p>
                <button className="add_to_cart_btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                  Add to Cart
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Proceed to Checkout */}
      {cart.length > 0 && (
        <div className="checkout-container">
          <button className="checkout-btn" onClick={() => navigate("/checkout", { state: { cart } })}>
            Proceed to Checkout ({cart.length} items)
          </button>
        </div>
      )}
    </>
  );
}
