import axios from "axios";
import { API_KEYS, API_URL } from "../../common/const/app-keys.const";
import { IPosts } from "../../common/types/posts.types";

axios.defaults.baseURL = API_URL
export const PostService ={
	async getAll(){
		return axios.get<IPosts[]>(API_KEYS.GET_ALL)
	}
}