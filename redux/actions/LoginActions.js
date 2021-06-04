export const setUser = (payload) => {
  return { type: "USER_LOGIN", payload };
};

export const logoutUser = (payload) => {
  return { type: "USER_LOGOUT", payload };
};
