import axios from "axios";
import { API_KEYS, API_URL } from "../../common/const/app-keys.const";
import { IPosts } from "../../common/types/posts.types";

axios.defaults.baseURL = API_URL
export const PostService ={
	async getAll(){
		return axios.get<IPosts[]>(API_KEYS.GET_ALL)
	},
	async getById(id:string | undefined){
		return axios.get<IPosts>(`${API_KEYS.GET_ALL}/${id}`)
	},
	async delete(id:string | undefined){
		return axios.delete(`${API_KEYS.GET_ALL}/${id}`)
	}
}