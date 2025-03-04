import { useState, useEffect } from 'react';

const useProducts = (productId = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = productId 
          ? `https://dummyjson.com/products/${productId}`
          : 'https://dummyjson.com/products';
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(productId ? result : result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return { data, loading, error };
};

export default useProducts; 