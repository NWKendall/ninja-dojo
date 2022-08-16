import { Link } from "react-router-dom";

const BlogItem = ({ blog: b, id }) => {
  return (
    <div className="blog-preview" key={id}>
      <Link to={`/blogs/${id}`}>
        <h2>{b.title}</h2>
        <p>Written by {b.author}</p>
      </Link>
      <div className="blog-preview" key={id}>  );
};

export default BlogItem;
