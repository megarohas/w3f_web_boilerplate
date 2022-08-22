import React, { Suspense } from "react";
import { W3FWBWrapper, W3FWBHeader } from "./app_styles";
const LazyChild = React.lazy(() => import("./app_child"));
import Child from "./app_child";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { Routes, Route, Link } from "react-router-dom";

const SuspenseLazyChild = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <LazyChild />
  </Suspense>
);
const middleware = [thunk];
const store = configureStore({
  reducer,
  middleware,
});
const Header = () => (
  <W3FWBHeader>
    <Link to="/">Home</Link>
    <Link to="/child">Child</Link>
    <Link to="/lazy_child">Lazy Child</Link>
  </W3FWBHeader>
);
const Body = () => (
  <W3FWBWrapper>
    <Routes>
      <Route path="/child" element={<Child />} />
      <Route path="/lazy_child" element={<Child />} />
      <Route path="/" element={<h1>Hello, it's HOME</h1>} />
    </Routes>
  </W3FWBWrapper>
);
const AppWrapper = () => (
  <React.Fragment>
    <Header />
    <Body />
  </React.Fragment>
);

const App = () => {
  return (
    <Provider store={store}>
      <Child />
      <AppWrapper />
    </Provider>
  );
};

export default App;
