import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMark, handleMarkAsRead }) => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  });

  return (
    <div>
      <h2 className="text-3xl">Total: {blogs.length}</h2>
      <div className="all-blogs flex flex-wrap gap-5 justify-center">
        {blogs.map((blog) => (
          <Blog
            blog={blog}
            key={blog.id}
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
