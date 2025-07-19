import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <img src={product.imageUrl} className="h-64 object-cover" alt={product.name} />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-4">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;

