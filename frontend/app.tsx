import React, { Suspense } from "react";
import { W3FWBWrapper } from "./app_styles";
const LazyChild = React.lazy(() => import("./app_child"));
import Child from "./app_child";

const App = () => {
  return (
    <W3FWBWrapper
      onClick={() => {
        // alert("check");
      }}
    >
      <h1> Hello, REACT World!!!!!</h1>
      <Child />
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyChild />
      </Suspense>
    </W3FWBWrapper>
  );
};

export default App;
