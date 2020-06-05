import React from "react";
import CommentList from "./CommentList";

const Tweet = props => {
	return (
		<div>
		<h2>{props.content}</h2>
		<CommentList />
		</div>
		);
};

export default Tweet;