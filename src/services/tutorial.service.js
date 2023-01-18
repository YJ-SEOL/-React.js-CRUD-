import http from "../http-common";

// 데이터 서비스 생성
// 이 단계에서는 axios 개체를 사용하여 HTTP 요청을 보내는 서비스 만듬.

class TutorialDataService {
    getAll() {
        return http.get("tutorials");
    }
    get(id) {
        return http.get(`/tutorials/${id}`);
    }
    create(data) {
        return http.post("/tutorials", data);
    }
    update(id, data) {
        return http.put(`/tutorials/${id}`, data);
    }
    delete(id) {
        return http.delete(`/tutorials/${id}`);
    }
    deleteAll() {
        return http.delete(`/tutorials`);
    }
    findByTitle(title) {
        return http.get(`/tutlrials?title=${title}`);
    }
}

export default new TutorialDataService();
// CRUD 오퍼레이션을 만들기 위해 GET, POST, PUT, DELETE
// HTTP 요청에 해당하는 axios : get, post, put, delete 메소드 호출
