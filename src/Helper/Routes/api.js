const base_url = "https://conduit-api-realworld.herokuapp.com/api";
export const API = {
  login: `${base_url}/users/login`,
  register: `${base_url}/users`,
  getArticles: `${base_url}/articles`,
  deleteArticle: `${base_url}/`,
  editArticle: `${base_url}/articles/:slug`,
  newArticle: `${base_url}/articles`,
  getUser: `${base_url}/user`,
};
export default API;
