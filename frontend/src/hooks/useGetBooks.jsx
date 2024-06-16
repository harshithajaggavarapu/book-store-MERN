import { useEffect, useState } from "react";
import axios from "axios";

const useGetBooks = (triggering) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBooks = async () => {
    try {
      const data = axios.get("http://localhost:5555/books/");
      const json = await data;
      setBooks(json.data);
      console.log(json.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getBooks();
  }, [triggering]);

  return { books, loading };
};

export default useGetBooks;
