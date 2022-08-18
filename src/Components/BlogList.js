import { Link } from "react-router-dom";

const BlogList = ({ blogs, listTitle, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{listTitle}</h2>
      {blogs.map((b) => (
        <div className="blog-preview" key={b.id}>
        <Link to={`/blogs/${b.id}`}>
          <h2>{b.title}</h2>
          <p>Written by {b.author}</p>
        </Link>
      </div>
      ))}
    </div>
  );
};

export default BlogList;
