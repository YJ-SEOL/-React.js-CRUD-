import axios from "axios";

export default axios.create({
    // baseURL 서버가 구성하는 REST API에 의존하는 URL 변경
    baseURL: "http:localhost:8080/api",
    headers: {
        "Content-type": "application/json",
    },
});
