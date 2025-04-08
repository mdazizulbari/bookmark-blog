import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookMarked, setBookMarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMark = (blog) => {
    setBookMarked([...bookMarked, blog]);
  };
  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);
    handleRemoveBookMark(id);
  };
  const handleRemoveBookMark = (id) => {
    const remainingBookMark = bookMarked.filter((data) => data.id !== id);
    setBookMarked(remainingBookMark);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-9/12">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-3/12">
          <h2>Reading Time: {readingTime}</h2>
          <h2 className="mb-5">Bookmark Count: {bookMarked.length}</h2>
          {bookMarked.map((data,id) => (
            <p key={id} className="p-2 mb-2 bg-blue-500 rounded-xl">{data.title}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
