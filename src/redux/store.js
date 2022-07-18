import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducer/blogSlice";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import blogSlice from "./reducer/blogSlice";
// import { createStore, applyMiddleware } from "redux";

export default configureStore({
    reducer: {
        blog: blogReducer,
    }
});