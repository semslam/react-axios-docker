import http from "../http-client";

class ArticleDataService {
  getAll() {
    return http.get("/article");
  }

  get(id) {
    return http.get(`/article/${id}`);
  }

  create(data) {
    return http.post("/article", data);
  }

  update(id, data) {
    return http.put(`/article/${id}`, data);
  }

  delete(id) {
    return http.delete(`/article/${id}`);
  }


  findByContent(title) {
    return http.get(`/article?content=${title}`);
  }
}

export default new ArticleDataService();