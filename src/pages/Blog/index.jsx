import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../components/Post/index.jsx";

const Blog = () => {
	const posts = useSelector((state) => state.data.data.posts);
	return (
		<div className="blog">
			<section className="posts">
				<h2 className="posts__header">Posts</h2>
				{posts &&
					posts.map((post) => {
						return <Post post={post} key={post.id} />;
					})}
			</section>
		</div>
	);
};
export { Blog };
