import React from "react";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  // const { blog } = props;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-between items-center">
            <h4>{blog.author}</h4>
            <img className="w-16" src={blog.author_img} alt="" />
            <button onClick={() => handleBookMark(blog)}>
              <FaRegBookmark size={25} />
            </button>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            temporibus esse sit itaque harum eum hic perferendis ducimus
            voluptas. Maxime.
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
