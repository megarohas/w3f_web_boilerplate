import React, { Suspense } from "react";
import { W3FWBWrapper } from "./app_styles";
const Child = React.lazy(() => import("./app_child"));

const App = () => {
  return (
    <W3FWBWrapper
      onClick={() => {
        // alert("check");
      }}
    >
      <h1> Hello, REACT World!!!!!</h1>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Child />
      </Suspense>
    </W3FWBWrapper>
  );
};

export default App;
