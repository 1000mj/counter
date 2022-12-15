import React, { useState } from "react";

const Counter=()=> {
  const [value,setValue] = useState(0); //eslint-disable-next-line
  

  return (
  <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="btn btn-outline btn-success">Success</button>
  </>
  );
}

export default Counter;
