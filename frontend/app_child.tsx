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
  const [count, setCount] = useState(server_flag ? 0 : 100);
  return (
    <div
      onClick={() => {
        alert("check2");
        dispatch({
          type: "DEFAULT_ACTION_TYPE",
          payload: [
            {
              id: 1,
              title: "1st Post",
            },
            {
              id: 2,
              title: "2nd Post",
            },
          ],
        });
      }}
    >
      <h1> Hello, I'm CHILD! {count}</h1>
    </div>
  );
};

export default Child;
