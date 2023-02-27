import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
const API_IMG = "https://image.tmdb.org/t/p/w500/";
import { Button } from "react-bootstrap";
const MoviesBox = ({
  title,
  poster_path,
  votes_average,
  release_date,
  overview,
}) => {
  const[show,setShow]=useState(false);
  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);


  return (
    // <div className="card text-center bg-secondary ">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle></ModalTitle>
        </ModalHeader>
        <ModalBody>
        <img className="card-img-top" src={API_IMG + poster_path}></img>
        <h3>{title}</h3>
        <h4>IMDB: {votes_average}</h4>
        <h5>Release date: {release_date}</h5>
        <br></br>
        <h6>Overview</h6>
<p>{overview}</p>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    // </div>
  );
};

export default MoviesBox;
