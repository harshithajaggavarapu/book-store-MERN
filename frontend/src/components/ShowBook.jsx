import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const ShowBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [bookDetails, setBookDetails] = useState(null);

  const getBookDetails = async () => {
    try {
      const data = await axios.get("http://localhost:5555/books/" + id);
      setBookDetails(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    getBookDetails();
  }, []);
  return (
    <div>
      <BackButton dest={"/"} />
      {!loading ? (
        <div className="border border-sky-600 rounded-lg p-[10%] m-[10%] w-[40%] h-[10%]">
          <p className="text-xl">Name : {bookDetails.title}</p>
          <p className="text-xl">Author : {bookDetails.author}</p>
          <p className="text-xl">Published Year : {bookDetails.publishYear}</p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ShowBook;
