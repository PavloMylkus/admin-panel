import { useQuery } from "@tanstack/react-query";
import { PostService } from "../../app/services/posts.service";
import { QUERY_KEYS } from "../const/app-keys.const";


export const usePostData = ()=>{
	const { data:response, isLoading, error} = useQuery(
		[QUERY_KEYS.GET_POSTS], 
		() =>PostService.getAll(),{
			onError:(error:any)=>{
				alert(error.message)
			}
		} )
	
	  const rows = response?.data;
	
	  return { isLoading, rows}
}
