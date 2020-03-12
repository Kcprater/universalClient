import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";

const CreateRating = (props) => {
  // const [rider, setRider] = useState('');//may not need
  const [nameOfRide, setNameOfRide] = useState('');
  const [date, setDate] = useState('');
  const [waitTime, setWaitTime] = useState('');
  const [rideRating, setRideRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    fetch(`http://localhost:3000/api/rating`, {
      method: "POST",
      body: JSON.stringify({rating: {nameOfRide: nameOfRide, date: date, waitTime: waitTime, rideRating: rideRating, comments: comments}}),
      headers: new Headers({
        "Content-Type": 'application/json',
        "Authorization": props.token
      })
    }).then((res) => res.json())
    .then((rideData) => {
      console.log(rideData);
      // setRider('');
      setNameOfRide('');
      setDate('');
      setWaitTime('');
      setRideRating('');
      setComments('');
      props.fetchRatings();
    })
    e.preventDefault();
  }

  return(
    <div>
      <h3>Create a Rating</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
        <Label htmlFor="nameOfRide"/>
        <Input name="nameOfRide" value={nameOfRide} onChange={(e) => setNameOfRide(e.target.value)} placeholder="Name of Ride"/>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="date"/>
        <Input name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date of visit"/>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="waitTime"/>
        <Input name="waitTime" value={waitTime} onChange={(e) => setWaitTime(e.target.value)} placeholder="Time Waited"/>
        </FormGroup>
        <FormGroup>
        <Input type="select" id="riderrating" name="RiderRating" value={rideRating} onChange={(e) => setRideRating(e.target.value)} placeholder="Ride Rating"/>
        <option>Ride Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="comments"/>
        <Input name="comments" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Comments"/>
        </FormGroup>
        <Button type="submit">Submit Rating</Button>
      </Form>
    </div>
  )
}

export default CreateRating;//add modals???