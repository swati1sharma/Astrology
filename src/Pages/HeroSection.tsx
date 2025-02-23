import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import axios from "axios";
import "./Style/HeroSection.css";
import StickyButtons from "./StickyButtons";
import "../Pages/Style/HeroSection.css";

export default function HeroSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("API Response:", response.data); 
  
        if (Array.isArray(response.data) && response.data.length > 0) { 
          const fetchedProducts = response.data.slice(0, 9).map((item, index) => {
            console.log(`Index: ${index}, Item:`, item); // 
  
            return {
              id: index + 1,
              name: `Astro Product ${index + 1}`,
              image: `/Images/astro-product-${index + 1}.jpg`,
              price: `$${(index + 1) * 10}`,
            };
          });
  
          setProducts(fetchedProducts);

        } else {
          console.error("Unexpected API response format");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  


  const itemTemplate = ( product ) => {
    if (!product || !product.id) {
      return <div>No Product Found</div>;
    }
  
    return (
      <div className="product-card">
        <Card key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <button className="buy-button">Buy Now</button>
        </Card>
      </div>
    );
  };
  

  return (
    <div className="hero-container">
      <h2 className="hero-heading">Unlock the Secrets of Your Destiny with Pandit Punit Vyas</h2>
      <div className="carousel-container">
        <Carousel
          value={products}
          itemTemplate={itemTemplate}
          numVisible={3}
          numScroll={1}
          className="carousel-fullscreen"
          showNavigators={true}
          showIndicators={true} 
          responsiveOptions={[
            { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
            { breakpoint: "768px", numVisible: 1, numScroll: 1 },
          ]}
          prevIcon={
            <i className="pi pi-chevron-left" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
          nextIcon={
            <i className="pi pi-chevron-right" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
        />
      </div>
      <StickyButtons />
    </div>
  );
}








































