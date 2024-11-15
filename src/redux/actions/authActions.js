import { logoutUser as sliceLogoutUser } from "../reducers/authReducers";

export const loginUser = (username) => (dispatch) => {
  dispatch({ type: "LOGIN_SUCCESS", payload: username });
};

export const logoutUser = () => (dispatch) => {
 
  localStorage.removeItem("user");
  localStorage.removeItem("authToken");


  dispatch(sliceLogoutUser());
};
