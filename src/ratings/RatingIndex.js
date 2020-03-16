import React, {useState, useEffect} from "react";
import {Container, Row, Col} from "reactstrap";
import CreateRating from "./CreateRating";
import RatingTable from "./RatingTable";
import EditRating from "./EditRating";

const RatingIndex = (props) => {

  const [riderratings, setRiderRatings] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [ratingToUpdate, setRatingToUpdate] = useState({});

  const fetchRatings = () => {
    fetch("http://localhost:3000/api/rating", {
      method: "GET",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": props.token
      })
    }).then( (res) => res.json())
    .then((ratingData) => {
      setRiderRatings(ratingData)
    })
  }

  useEffect(() => {
    fetchRatings();
  }, [])

  const editUpdateRating = (riderrating) => {
    setRatingToUpdate(riderrating);
    // console.log(riderrating);
  }

  const updateOn = () => {
    setUpdateActive(true);
  }

  const updateOff = () => {
    setUpdateActive(false);
  }

  return(
    <Container>
      <Row>
        <Col md="3">
          <CreateRating fetchRatings={fetchRatings} token={props.token}/>
        </Col>
        <Col md="8">
          <RatingTable riderratings={riderratings} editUpdateRating={editUpdateRating} updateOn={updateOn} fetchRatings={fetchRatings}
          token={props.token}/>
        </Col>
        {updateActive ? <EditRating ratingToUpdate={ratingToUpdate} 
        updateOff={updateOff} token={props.token} fetchRatings={fetchRatings}/> : <></>}
      </Row>
    </Container>
  )
}

export default RatingIndex;