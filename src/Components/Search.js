import React from "react";
import ReactStars from "react-rating-stars-component";

function Search({ setInput, ratingChanged }) {
	return (
		<header>
			<input type="text" onChange={(e) => setInput(e.target.value)} />
			<ReactStars
				count={5}
				onChange={ratingChanged}
				size={24}
				activeColor="#ffd700"
			/>
		</header>
	);
}

export default Search;
