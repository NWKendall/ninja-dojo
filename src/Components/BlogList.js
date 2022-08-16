import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs, listTitle, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{listTitle}</h2>
      {blogs.map((b) => (
        <BlogItem blog={b}/>
      ))}
    </div>
  );
};

export default BlogList;
