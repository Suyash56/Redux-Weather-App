const initialLoginstate = {
  username: "",
  password: "",
  loggedInStatus: false,
};

function loginReducer(state = initialLoginstate, { type, payload }) {
  switch (type) {
    case "LOGIN_USERNAME":
      return { ...state, username: payload };

    case "LOGIN_PASSWORD":
      return { ...state, password: payload };

    case "LOGIN":
      return { ...state, loggedInStatus: payload };

    case "LOGOUT":
      return { ...state, loggedInStatus: payload };

    case "LOGIN_RESET":
      return payload;

    default:
      return state;
  }
}

export default loginReducer;
