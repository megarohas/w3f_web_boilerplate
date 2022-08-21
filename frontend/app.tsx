import React, { Suspense } from "react";
import { W3FWBWrapper } from "./app_styles";
const LazyChild = React.lazy(() => import("./app_child"));
import Child from "./app_child";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware,
});

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
