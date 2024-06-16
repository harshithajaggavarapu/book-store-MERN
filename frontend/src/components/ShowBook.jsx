import { useParams } from "react-router-dom";
import Header from "./Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Loader from "./Loader";
import useGetBookDetails from "../hooks/useGetBookDetails";

const ShowBook = () => {
  const { id } = useParams();
  const { loading, bookDetails, error } = useGetBookDetails(id);
  console.log(error);

  return (
    <div>
      <Header home={false} />
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
