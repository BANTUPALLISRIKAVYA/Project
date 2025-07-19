import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product._id} className="border p-4 rounded shadow">
          <img src={product.imageUrl} alt={product.name} className="h-40 object-cover w-full" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <Link to={`/product/${product._id}`} className="text-blue-500">View</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

