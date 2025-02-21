// import { useState, useEffect } from "react";
// import { Carousel } from "primereact/carousel";
// import { Card } from "primereact/card";
// import axios from "axios";
// import "./Style/HeroSection.css";
// import StickyButtons from "./StickyButtons";
// import "../Pages/Style/HeroSection.css";

// export default function HeroSection() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         if (response.data && response.data.length > 0) {
        
          
//           console.log(item);
//           console.log(index);
          
//           const fetchedProducts = response.data.slice(0, 9).map((item, index) => ({
//             id: index + 1,
//             name: `Astro Product ${index + 1}`,
//             image: `/Images/astro-product-${index + 1}.jpg`,
//             price: `$${(index + 1) * 10}`,
//           }));
//           setProducts(fetchedProducts);
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const itemTemplate = (product) => {
//     if (!product) return null; // Prevents errors if product is undefined

//     return (
//       <div className="product-card">
//         <Card key={product.id} className="product-card">
//           <img src={product.image} alt={product.name} className="product-image" />
//           <h4>{product.name}</h4>
//           <p>{product.price}</p>
//           <button className="buy-button">Buy Now</button>
//         </Card>
//       </div>
//     );
//   };

//   return (
//     <div className="hero-container">
//       <h2 className="hero-heading">Unlock the Secrets of Your Destiny with Pandit Punit Vyas</h2>
//       <div className="carousel-container">
//         <Carousel
//           value={products}
//           itemTemplate={itemTemplate}
//           numVisible={3}
//           numScroll={1}
//           className="carousel-fullscreen"
//           showNavigators
//           showIndicators={false}
//           responsiveOptions={[
//             { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
//             { breakpoint: "768px", numVisible: 1, numScroll: 1 },
//           ]}
//           prevIcon={
//             <i className="pi pi-chevron-left" style={{ fontSize: "2em", color: "#FF5722" }} />
//           }
//           nextIcon={
//             <i className="pi pi-chevron-right" style={{ fontSize: "2em", color: "#FF5722" }} />
//           }
//         />
//       </div>
//       <StickyButtons />
//     </div>
//   );
// }
