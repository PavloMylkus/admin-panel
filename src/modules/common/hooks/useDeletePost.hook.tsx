import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostService } from "../../app/services/posts.service";
import { QUERY_KEYS } from "../const/app-keys.const";



export const useDeletePost = ()=>{


  const deleteItemsMutation = useMutation(['delete'],
    (ids:string[]) =>
      Promise.all(
        ids.map((id:string) => {
          // Make a request to delete the item with this ID
          return PostService.delete(id)
        })
      ),
  );
	
	//   const post = response?.data;
	
	  return {deleteItemsMutation}
}