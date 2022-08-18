import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogEndPoint } from "./urls";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  let navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { title, body, author };
    setIsPending(true);
    
    fetch(blogEndPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      console.log("New Blog added!");
      setIsPending(false);
    });
    // new! replaced useHistory() hook | https://reactrouter.com/docs/en/v6/hooks/use-navigate
    navigate(-1);
  };


  return (
    <div className="create">
      <h2>Add A new Blog!</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog......</button>}
      </form>
    </div>
  );
};

export default Create;
