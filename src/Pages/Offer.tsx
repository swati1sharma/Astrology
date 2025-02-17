import  { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import '../Pages/Style/Offer.css';
import axios from 'axios';

const products = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Astro Product ${i + 1}`,
    image: `/Images/astro-product-${i + 1}.jpg`,
    price: `$${(i + 1) * 10}`
}));



export default function ProductGridPopup() {
    const [visible, setVisible] = useState(true);

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
    return (
        <Dialog 
            visible={visible} 
            onHide={() => setVisible(false)} 
            dismissableMask
            modal
            header="Astrology Products" 
            className="product-popup" 
        >
            <div className="product-grid">
                {products.map(product => (
                    <Card key={product.id} className="product-card" header={<img src={product.image} alt={product.name} />}>
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                        <button className="buy-button">Buy Now</button>
                    </Card>
                ))}
            </div>
        </Dialog>
    );
}
