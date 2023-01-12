const Post = ({ post }) => {
	return (
		<div className="post" key={post.id}>
			<h3 className="post__title">{post.title}</h3>
			<img className="post__image" src={post.imageSrc} />
			<p className="post__description">{post.description}</p>
			<span className="post__date">{post.date}</span>
		</div>
	);
};

export { Post };
