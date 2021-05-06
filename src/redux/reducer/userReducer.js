const initialState = {
  email: "",
  username: "",
  password: "",
};

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "USERNAME":
      return { ...state, username: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "RESET":
      return payload;
    default:
      return state;
  }
}

export default userReducer;
