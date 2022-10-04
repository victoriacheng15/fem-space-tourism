import { useState, useEffect } from 'react';

export const useFetchInfo = (page) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const url = './data/data.json';
    const fetchData = async () => {
      try {
        const info = await (await fetch(url)).json();
        setData(info[page]);
      } catch (error) {
        setFetchError(error);
      }
    };

    fetchData();
  }, [page]);
  return { data, fetchError };
};
