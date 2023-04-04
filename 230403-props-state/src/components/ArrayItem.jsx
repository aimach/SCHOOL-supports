import { useState } from "react";

function ArrayItem({ element }) {
  const { name, type } = element;
  const [isCaught, setIsCaught] = useState(false);

  return (
    <div>
      <h4>{`Name : ${name}`}</h4>
      <p>{`Type : ${type}`}</p>
      <button onClick={() => setIsCaught(!isCaught)}>is caught</button>
      {isCaught ? <p>The pokemon is caught</p> : <p>This pokemon is free</p>}
    </div>
  );
}

export default ArrayItem;
