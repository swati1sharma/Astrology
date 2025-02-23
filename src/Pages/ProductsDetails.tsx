// import { Card } from "primereact/card";
// import "./Style/ProductsDetails.css";
// import Yagya from "../Images/Yagya.jpg";
// import reiki from "../Images/reiki.jpg";
// import gemstone from "../Images/gemstone.jpg";
// import rudraksha from "../Images/Rudraksha.jpg";
// import Yantra from "../Images/Yantra.jpg";
// import Kawach from "../Images/kawach.webp";
// import faceReading from "../Images/faceReading.png";
// import evilEye from '../Images/evilEye.png';
// import { useNavigate } from "react-router-dom";

// const products = [
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

//   const handleCardClick = (product) => {
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
