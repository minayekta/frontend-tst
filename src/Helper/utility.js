export const checkAuth = () => {
  const auth = localStorage.getItem("token");
  if (auth) {
    return true;
  }
  return false;
};
