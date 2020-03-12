import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from "reactstrap";

const RatingEdit = (props) => {
  // const [editID, setEditID] = useState(props.rider.id)
  const [editNameOfRide, setEditNameOfRide] = useState(props.ratingToUpdate.nameOfRide);
  const [editDate, setEditDate] = useState(props.ratingToUpdate.date);
  const [editWaitTime, setEditWaitTime] = useState(props.ratingToUpdate.waitTime);
  const [editRideRating, setEditRideRating] = useState(props.ratingToUpdate.rideRating);
  const [editComments, setEditComments] = useState(props.ratingToUpdate.comments);

const ratingUpdate = (event, rating) => {
  event.preventDefault();
  fetch(`http://localhost:3000/api/rating/${props.ratingToUpdate.id}`, {
    method: "PUT",
    body: JSON.stringify({rating: {nameOfRide: editNameOfRide, date: editDate, waitTime: editWaitTime, rideRating: editRideRating, comments: editComments}}),
    headers: new Headers ({
      "Content-Type": "application/json",
      "Authorization": props.token
    })
  }).then((res) => {
    props.fetchRatings();
    props.updateOff();
  })
}

  return(
    <Modal isOpen={true}>
      <ModalHeader>Rate A Ride</ModalHeader>
      <ModalBody>
        <Form onSubmit={ratingUpdate}>
          <FormGroup>
            <Label htmlFor="nameOfRide">Change Name:</Label>
            <Input name="nameOfRide" value={editNameOfRide} onChange={(e) => setEditNameOfRide(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">Change Date:</Label>
            <Input name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="waitTime">Edit Wait Time:</Label>
            <Input name="waitTime" value={editWaitTime} onChange={(e) => setEditWaitTime(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rideRating">Edit Rating:</Label>
            <Input type="select" id="riderrating" name="RiderRating" value={editRideRating} onChange={(e) => setEditRideRating(e.target.value)} placeholder="Ride Rating"/>
              <option>Ride Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="comments">Edit Comments:</Label>
            <Input name="comments" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
          </FormGroup>
          <Button type="submit">Update Your Rating!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default RatingEdit;