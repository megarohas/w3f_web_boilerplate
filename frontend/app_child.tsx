import React from "react";

const Child = () => {
  return (
    <div
      onClick={() => {
        alert("check2");
      }}
    >
      <h1> Hello, I'm CHILD!!!!!!</h1>
    </div>
  );
};

export default Child;
