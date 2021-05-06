export const changeEmail = (email) => ({
  type: "EMAIL",
  payload: email,
});

export const changeUsername = (username) => ({
  type: "USERNAME",
  payload: username,
});

export const changePassword = (password) => ({
  type: "PASSWORD",
  payload: password,
});

export const reset = () => ({
  type: "RESET",
  payload: {},
});
