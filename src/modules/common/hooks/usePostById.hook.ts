import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../app/services/posts.service";
import { QUERY_KEYS } from "../const/app-keys.const";



export const usePostById = (id:string | undefined)=>{
	const { data:response, isLoading, error} = useQuery(
		[QUERY_KEYS.GET_POSTS, id], 
		() =>PostService.getById(id),{
			onError:(error:any)=>{
				alert(error.message)
			}
		} )
	
	  const post = response?.data;
	
	  return { isLoading, post}
}