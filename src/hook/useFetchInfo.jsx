import { useState, useEffect } from 'react';

export const useFetchInfo = (page) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const url = './src/data/data.json';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const info = await response.json();
        setData(info[page]);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchData();
  }, [page]);
  return { data, fetchError };
};
