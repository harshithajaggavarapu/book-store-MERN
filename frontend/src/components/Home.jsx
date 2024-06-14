import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Popup from "reactjs-popup";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [triggering, setTriggering] = useState(false);
  const deleteBook = async (id) => {
    setLoading(true);
    try {
      const response = axios.delete("http://localhost:5555/books/" + id);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setTriggering(!triggering);
  };
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

  // Plan
  // title section - ADD new book button
  // list of books in a table with column names as s.no, title, aithor, pusblished year
  // in each row we will display edit, delete and info options
  // edit button redirects to EditBook
  // delete button to Delete Book
  // info button to ShowBook
  // add button to CreateBoooks

  return (
    <div className="">
      <div className="flex justify-between bg-black bg-opacity-80">
        <h1 className="font-semibold text-xl p-2 m-2 text-white">Books List</h1>
        <Link to={"/books/create"}>
          <button className="border p-2 mr-5 m-2 border-black bg-red-800 rounded-md">
            Add Book
          </button>
        </Link>
      </div>
      {!loading ? (
        <div className="w-full mx-[10%] pt-[10%]">
          <table className=" table-auto border-separate border-spacing-2 w-9/12">
            <thead>
              <tr className="">
                <th className="border border-slate-600 rounded-md">S.no</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md">Author</th>
                <th className="border border-slate-600 rounded-md">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">Options</th>
              </tr>
            </thead>
            <tbody>
              {console.log(books.data)}
              {books.data &&
                books.data.map((book, index) => (
                  <tr key={book._id}>
                    <td className="border border-slate-600 text-center rounded-md">
                      {index + 1}
                    </td>
                    <td className="border border-slate-600 text-center rounded-md">
                      {book.title}
                    </td>
                    <td className="border border-slate-600 text-center rounded-md">
                      {book.author}
                    </td>
                    <td className="border border-slate-600 text-center rounded-md">
                      {book.publishYear}
                    </td>
                    <td className="border border-slate-600 text-center rounded-md">
                      <Link to={"/books/details/" + book._id}>
                        <button className="p-1">ℹ️</button>
                      </Link>

                      <Link to={"/books/edit/" + book._id}>
                        <button className="p-1">📝</button>
                      </Link>
                      {/* <Link to={"/books/delete/" + book._id}>
                        <button className="p-1">❌</button>
                      </Link> */}

                      <Popup
                        trigger={<button className="button"> ❌ </button>}
                        modal
                        nested
                      >
                        {(close) => (
                          <div className="modal bg-black p-5 bg-opacity-80 text-white">
                            <div className="flex justify-between">
                              <div className="header text-2xl font-bold">
                                {" "}
                                Delete Book{" "}
                              </div>
                              <button
                                className="close text-2xl font-extrabold"
                                onClick={close}
                              >
                                &times;
                              </button>
                            </div>
                            <div className="content p-10 m-10">
                              Are you sure you want to delete this book?
                            </div>
                            <div className="actions">
                              <button
                                className="button border border-black bg-red-600 mx-[40%] rounded-lg p-4 m-4"
                                onClick={() => {
                                  deleteBook(book._id);
                                  console.log("modal closed ");
                                  close();
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
