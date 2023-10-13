import axios from "axios";

class MovieDataService{

    getAll(page = 0){
        return axios.get(`http://localhost:5000/api/v1/movies?page=${page}`)
    }
    get(id){
        return axios.get(`http://localhost:5000/api/v1/movies/id/${id}`)
    }
    find(query, by = "title", page = 0){
        return axios.get(`http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`)
    }
    createReview(data){
        return axios.post("http://localhost:5000/api/vi/movies/review", data)
    }
    updateReview(data){
        return axios.post("http://localhost:5000/api/vi/movies/review", data)
    }
    deleteReview(id, userId){
        return axios.delete("http://localhost:5000/api/vi/movies/review", {data:{review_id: id, user_id: userId}})
    }
    getRating(){
        return axios.get("http://localhost:5000/api/vi/movies/ratings")
    }
}

const movieDataServiceInstance = new MovieDataService();

export default movieDataServiceInstance;