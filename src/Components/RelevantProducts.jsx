import React, {useState, useEffect} from 'react'
// import thumb1 from "../Pictures/image-product-1-thumbnail.jpg";
// import thumb2 from "../Pictures/image-product-2-thumbnail.jpg";
// import thumb3 from "../Pictures/image-product-3-thumbnail.jpg";
import Nike1 from "../Pictures/Nike1.jpg"
import './RelevantProduct.css'


const RelevantProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:8000/products');
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

      console.log(products);
  return (
    <div>
      <h1>Similar Products</h1>
      <div className='products-container'>
      {products.map(product => (
          <div className="product" key={product.id}>
            <img src={Nike1} alt="product-thumbnail" />
            <div className="info">
              <h2>{product.name}</h2>
              <p className='description'>{product.description}</p>
              <p className='price'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelevantProducts
