import { login, signUp } from "../api/auth";
import { toast } from "react-toastify";
export const signin = (formdata, router) => async (dispatch) => {
  try {
    const res = await login(formdata);
    dispatch({ type: "LOGIN", data: res.data });
    return router("/dashboard");
  } catch (error) {
    toast.error("Invalid email or password");
    return error;
  }
};

export const signup = (formdata, router) => async (dispatch) => {
  try {
    await signUp(formdata);
    // toast("You have been signed up please wait for verification");
    dispatch({ type: "NEXT" });
  } catch (error) {
    return error;
  }
};
