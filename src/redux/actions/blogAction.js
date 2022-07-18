import store from "../store";
import axios from "axios";

export function addBlogs(data) {
    return async (dispatch) => {
      const headers = {
        "content-type": "multipart/form-data",
      };
  
      return axios
        .post("http://localhost:9000/blogs/", data, { headers: headers })
        .then((res) => {
            console.log("respnse 123", res);
            dispatch({
            //   type: action,
              payload: res.data
          }
        //   return { val: false, message: `Some error occured - ${res.data}` };
        )
        .catch(async (error) => {
          console.log("Error");
          return error;
        });
    });
  }
}