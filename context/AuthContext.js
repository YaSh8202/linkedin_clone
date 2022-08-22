import axios from "axios";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "register":
    case "signin":
      return { errorMessage: "", token: action.payload };

    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      break;
  }
};

const signup =
  (dispatch) =>
  async ({ name, email, password }, callback) => {
    try {
      const response = await axios.post(
        "/api/auth/register",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "register", payload: response.data.token });
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
  ({ email, password }, callback) => {
    try {
      const response = axios.post("/api/auth/sigin", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      callback();
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with signup ",
      });
    }
  };

const { Provider, Context } = createDataContext(
  authReducer,
  { signup: signup, signin: signin },
  { token: null, errorMessage: "" }
);

export const AuthProvider = Provider;
export const AuthContext = Context;
