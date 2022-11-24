import { useEffect, useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/john-smilga/followers?per_page=100"
        );
        const data = await response.json();
        setData(paginate(data));
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);
  return { loading, error, data };
};
export default useFetch;

const paginate = (data) => {
  const itemsPerPage = 10;

  const newData = Array.from({ length: itemsPerPage }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return newData;
};
