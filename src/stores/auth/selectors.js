export const selectIsLoggedIn = (state) => {
  return console.log(state);
};

export const selectUser = (state) => state.auth.user;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
