export const changeUsername = (username) => ({
  type: "LOGIN_USERNAME",
  payload: username,
});

export const changePassword = (password) => ({
  type: "LOGIN_PASSWORD",
  payload: password,
});

export const login = (loggedInStatus) => ({
  type: "LOGIN",
  payload: loggedInStatus,
});

export const logout = (loggedInStatus) => ({
  type: "LOGOUT",
  payload: loggedInStatus,
});

export const loginReset = () => ({
  type: "LOGIN_RESET",
  payload: {},
});
