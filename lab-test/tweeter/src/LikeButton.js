import React from 'react';

class LikeButton extends React.Component {



	state = {
            likes: 0
        };
    
        addLike = () => {
            let likeCount = this.state.likes + 1;
            this.setState({
                likes:likeCount
            });
        };
    
        render() {
            return<span> <button onClick = {this.addLike}>Like</button> Likes: {this.state.likes}</span>
        }

	// state = {
	// 	likes: 0
	// };

	// addLike = () => {
	// 	let newCount = this.state.likes + 1;
	// 	this.setState({
	// 		likes:newCount
	// 	});
	// };

	// render() {
	// 	return <button onClick = {this.addLike}> Likes: {this.state.likes} </button>
	// }
}

export default LikeButton;