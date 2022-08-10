const Home = () => {
  const handleClick = (e) => console.log("Hello Ninjas", e);
  const handleClick2 = (name, e) => console.log("Hello " + name, e);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClick2("Bobby", e)}>Click Me Again</button>
    </div>
  );
};

export default Home;
<div className="home"></div>;
