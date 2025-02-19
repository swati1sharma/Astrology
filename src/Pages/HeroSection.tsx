import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import axios from "axios";
import "./Style/HeroSection.css";
import { Button } from "primereact/button";
import StickyButtons from "./StickyButtons";
import "../Pages/Style/HeroSection.css";

export default function HeroSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch from API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const fetchedProducts = response.data.slice(0, 9).map((item, index) => ({
          id: index + 1,
          name: `Astro Product ${index + 1}`,
          image: `/Images/astro-product-${index + 1}.jpg`,
          price: `$${(index + 1) * 10}`,
        }));
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const itemTemplate = (product) => {
    return (
      <div className="product-card">
        <Card
          key={product.id}
          className="product-card"
          header={<img src={product.image} alt={product.name} />}
        >
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
          className="carousel-fullscreen"
          showNavigators 
          showIndicators={false} 
          prevIcon={
            <i className="pi pi-chevron-left" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
          nextIcon={
            <i className="pi pi-chevron-right" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
        />
      </div>
     <StickyButtons/>
    </div>
  );
}
