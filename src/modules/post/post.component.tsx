import React from "react"
import { useParams } from "react-router-dom";
import { usePostById } from "../common/hooks/usePostById.hook";

const Post = () => {
	const {id} = useParams();
	const { post ,isLoading } = usePostById(id)


  return (
	<div>
	  <img src={post?.imageUrl}/>
	</div>
  )
};

export default Post;
