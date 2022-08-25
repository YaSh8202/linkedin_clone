import axios from "axios";
import jwt from "jsonwebtoken";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "register":
    case "signin":
      return {
        errorMessage: "",
        token: action.payload.token,
        name: action.payload.name,
        email: action.payload.email,
      };

    case "signout":
      return { token: null, name: null, email: null };

    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      break;
  }
};

const signup =
  (dispatch) =>
  async ({ name, email, password }, callback) => {
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      const token = response.data.token;

      localStorage.setItem("token", token);
      dispatch({
        type: "register",
        payload: { token, name: name, email },
      });

      callback();
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup ",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }, callback) => {
    try {
      const response = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch({
        type: "signin",
        payload: {
          token,
          name: response.data.name,
          email: response.data.email,
        },
      });
      callback();
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signin ",
      });
    }
  };

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const tryLocalSignin = (dispatch) => async (call) => {
  const token = localStorage.getItem("token");
  if (token) {
    const userId = jwt.decode(token).userId;
    const res = await axios.get("/api/getuser", {
      params: {
        userId,
      },
    });

    dispatch({
      type: "signin",
      payload: { token, name: res.data.name, email: res.data.email },
    });
    call();
  }
};

const signout = (dispatch) => async () => {
  localStorage.removeItem("token");
  dispatch({ type: "signout" });
};

const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup: signup,
    signin: signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
  },
  { token: null, errorMessage: "", name: null, email: null }
);

export const AuthProvider = Provider;
export const AuthContext = Context;
