import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Bobby Boo");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName("Nic");
    setAge(age + 1);
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
<div className="home"></div>;
