import { createSlice } from "@reduxjs/toolkit";
import AddBlog from "../../components/addBlog";

export const blogSlice = createSlice({
    name: "blog",
    initialState:{
        title:null,
        author:null,
        content:null
    },
    reducers:{
        AddBlog: (state, action) => {
            state.title =  action.payload.title;
            state.author = action.payload.author;
            state.content = action.payload.content;
            // state.blog = action.payload;
        }
    }
})

export const { login } = blogSlice.actions;

export const selectBlog = (state) => state.blog.blog;

export default blogSlice.reducer;

// import { MEET_SUCCESS, MEET_FAILURE, HEADER, GET_USER_SETTINGS, PUT_USER_SETTINGS, PAYMENT_CREATE } from "../constants/actionTypes";

// const defaultState = {
//   zoom_settings: {},
//   paymentCreated: {}
// };
// let zoomData = {};
// export default (state = defaultState, action) => {
//   switch (action.type) {
//     case MEET_SUCCESS:
//       return { ...state, meetData: action.payload };

//     case MEET_FAILURE:
//       return { ...state, message: "" };

//     default:
//       return { ...state };
//   }
// };