import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

function AddMovie({ setMoviesData, MoviesData }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [rate, setRate] = useState(0);

	const add = () => {
		setMoviesData([
			...MoviesData,
			{ id: Math.random(), title, description, posterUrl: image, rate },
		]);
		setShow(false);
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Add new movie
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>title</label>
					<input type="text" onChange={(e) => setTitle(e.target.value)} />
					<label>description</label>
					<input type="text" onChange={(e) => setDescription(e.target.value)} />
					<label>image</label>
					<input type="text" onChange={(e) => setImage(e.target.value)} />
					<label>rate</label>
					<input type="text" onChange={(e) => setRate(e.target.value)} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={add}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddMovie;
