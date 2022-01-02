import api, { authHeader } from '../apiConfig';

class ArticlesAPI {
  static handShake = () => {
    return api.get(
      '/',
      {
        headers: authHeader(),
      },
    );
  }

  static getArticles = (page) => {
    return api.get(
      `/articles?page=${page}`,
      {
        headers: authHeader(),
      },
    );
  }
}

export default ArticlesAPI;
