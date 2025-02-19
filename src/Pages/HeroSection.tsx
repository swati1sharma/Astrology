import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Card } from "primereact/card";
import axios from "axios";
import "./Style/HeroSection.css";
import { Button } from "primereact/button";

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
      <div className="carousel-container">
        <Carousel
          value={products}
          itemTemplate={itemTemplate}
          numVisible={3} // Keeps 3 items visible on larger screens
          className="carousel-fullscreen"
          showNavigators // Keeps navigation buttons
          showIndicators={false} // Removes scrolling indicators
          prevIcon={
            <i className="pi pi-chevron-left" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
          nextIcon={
            <i className="pi pi-chevron-right" style={{ fontSize: "2em", color: "#FF5722" }} />
          }
        />
      </div>
      <div className="sticky-buttons">
        <Button
          label="Chat Now"
          icon="pi pi-comments"
          className="p-button-success"
          onClick={() => alert("Chat Now clicked")}
        />
        <Button
          label="Call Now"
          icon="pi pi-phone"
          className="p-button-warning"
          onClick={() => alert("Call Now clicked")}
        />
      </div>
    </div>
  );
}
