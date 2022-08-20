import React, { useState } from "react";

const Child = () => {
  const server_flag = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

  // const [count, setCount] = useState(1);
  const [count, setCount] = useState(server_flag ? 0 : 100);
  return (
    <div
      onClick={() => {
        alert("check2");
      }}
    >
      <h1> Hello, I'm CHILD! {count}</h1>
    </div>
  );
};

export default Child;
