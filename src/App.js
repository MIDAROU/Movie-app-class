import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Components/Search";

function App() {
	const [MoviesData, setMoviesData] = useState([
		{
			id: 0,
			title: "peaky blinders",
			posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
			rate: 4,
			description:
				"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
			trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
		},
		{
			id: 1,
			title: "Game of thrones",
			posterUrl:
				"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
			rate: 5,
			description:
				"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
			trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
		},
		{
			id: 2,
			title: "The good doctor",
			posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
			rate: 4,
			description:
				"Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
			trailer: "https://www.youtube.com/embed/msJggy8xtmI",
		},
		{
			id: 3,
			title: "Breaking bad",
			posterUrl:
				"https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
			rate: 4,
			description:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			trailer: "https://www.youtube.com/embed/lrcqbavlbyQ",
		},
		{
			id: 4,
			title: "Prison Break",
			posterUrl:
				"https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
			rate: 1,
			description:
				"Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
			trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
		},
		{
			id: 5,
			title: "Gangs of London",
			posterUrl:
				"https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
			rate: 4,
			description:
				"Tells the story of London being torn apart by the turbulent power struggles of its international gangs and the sudden power vacuum that's created when the head of London's most powerful crime family is assassinated.",
			trailer: "https://www.youtube.com/embed/4CJ5p4XisHs",
		},
		{
			id: 6,
			title: "Taboo",
			posterUrl:
				"https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
			rate: 2,
			description:
				"Adventurer James Keziah Delaney returns to London during the War of 1812 to rebuild his late father's shipping empire. However, both the government and his biggest competitor want his inheritance at any cost - even murder.",
			trailer: "https://www.youtube.com/embed/W1fiijqrKuc",
		},
		{
			id: 7,
			title: "Lethal Weapon",
			posterUrl:
				"https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
			rate: 4,
			description:
				"A slightly unhinged cop is partnered with a veteran detective trying to maintain a low stress level in his life.",
			trailer: "https://www.youtube.com/embed/wN8h4-oyAbo",
		},
		{
			id: 8,
			title: "Dexter",
			posterUrl:
				"https://images-na.ssl-images-amazon.com/images/I/81JKXT1j0OL._SL1500_.jpg",
			rate: 1,
			description:
				"By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
			trailer: "https://www.youtube.com/embed/YQeUmSD1c3g",
		},
		{
			id: 9,
			title: "Black Sails",
			posterUrl:
				"https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
			rate: 3,
			description:
				"Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
			trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ",
		},
	]);
	const [Input, setInput] = useState("");
	const [rate, setRate] = useState(1);
	const ratingChanged = (newRating) => {
		setRate(newRating);
	};
	return (
		<div>
			<Search ratingChanged={ratingChanged} setInput={setInput} />
			<AddMovie
				ratingChanged={ratingChanged}
				setMoviesData={setMoviesData}
				MoviesData={MoviesData}
			/>
			<MovieList
				rate={rate}
				Input={Input}
				ratingChanged={ratingChanged}
				MoviesData={MoviesData}
			/>
		</div>
	);
}

export default App;
