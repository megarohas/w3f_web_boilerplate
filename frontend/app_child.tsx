import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Child = () => {
  const server_flag = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

  // const [count, setCount] = useState(1);
  const store = useSelector((state) => state);
  console.log("STORE:", store);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(server_flag ? 0 : 100);
  // const [count, setCount] = useState(0);
  return <h1>1</h1>;
};

export default Child;
