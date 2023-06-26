import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : "no title"}</h1>;
}

export default function Homepage() {
  const names = ["john smith", "jane doe", "samuel luke"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="React" />
      <ul>
        {names.map((elem) => (
          <li key={elem}>{elem}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like({likes})</button>
    </div>
  );
}
