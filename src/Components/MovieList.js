import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function MovieList({ MoviesData, ratingChanged, Input, rate }) {
	return (
		<div className="container">
			{MoviesData.filter(
				(el) =>
					el.title.toLowerCase().includes(Input.toLowerCase().trim()) &&
					el.rate >= rate
			).map((movie) => (
				<Card style={{ width: "30%" }}>
					<Card.Img
						style={{ height: "500px" }}
						variant="top"
						src={movie.posterUrl}
					/>
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>{movie.description}</Card.Text>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							value={movie.rate}
							size={24}
							activeColor="#ffd700"
						/>
					</Card.Body>
				</Card>
			))}
		</div>
	);
}

export default MovieList;
