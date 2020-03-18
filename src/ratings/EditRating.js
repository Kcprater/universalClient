import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from "reactstrap";
import APIURL from '../helpers/environment'

const RatingEdit = (props) => {
  const [editNameOfRide, setEditNameOfRide] = useState(props.ratingToUpdate.nameOfRide);
  const [editDate, setEditDate] = useState(props.ratingToUpdate.date);
  const [editWaitTime, setEditWaitTime] = useState(props.ratingToUpdate.waitTime);
  const [editRideRating, setEditRideRating] = useState(props.ratingToUpdate.rideRating);
  const [editComments, setEditComments] = useState(props.ratingToUpdate.comments);

const ratingUpdate = (event, rating) => {
  event.preventDefault();
  fetch(`${APIURL}/api/rating/${props.ratingToUpdate.id}`, {
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
      <ModalHeader>Rate An Attraction</ModalHeader>
      <ModalBody>
        <Form onSubmit={ratingUpdate}>
          <FormGroup>
            <Label htmlFor="nameOfRide">Change Name:</Label>
            <Input type="select" id="nameOfRide" name="nameOfRide" value={editNameOfRide} onChange={(e) => setEditNameOfRide(e.target.value)} placeholder="Name of Ride">
            <option>Attraction Name</option>
            <option value="Caro-Suess-el">Caro-Suess-el</option>
            <option value="Despicable Me Minion Mayhem">Despicable Me Minion Mayhem</option>
            <option value="Doctor Doom's Fearfall">Doctor Doom's Fearfall</option>
            <option value="Dudley Do-Right's Ripsaw Falls">Dudley Do-Right's Ripsaw Falls</option>
            <option value="E.T. Adventure">E.T. Adventure</option>
            <option value="Fast and Furious - Supercharged">Fast and Furious - Supercharged</option>
            <option value="Flight of the Hippogriff">Flight of the Hippogriff</option>
            <option value="Hagrids Magical Creatures Motorbike Adventure">Hagrids Magical Creatures Motorbike Adventure</option>
            <option value="Harry Potter and the Escape from Gringotts">Harry Potter and the Escape from Gringotts</option>
            <option value="Harry Potter and the Forbidden Journey">Harry Potter and the Forbidden Journey</option>
            <option value="Hogwarts Express: Hogsmeade Station">Hogwarts Express: Hogsmeade Station</option>
            <option value="Hogwarts Express: Kings Cross Station">Hogwarts Express: Kings Cross Station</option>
            <option value="Hollywood Rip Ride Rockit">Hollywood Rip Ride Rockit</option>
            <option value="Jurassic Park River Adventure">Jurassic Park River Adventure</option>
            <option value="Kang and Kodos' Twirl 'n' Hurl">Kang and Kodos' Twirl 'n' Hurl</option>
            <option value="MEN IN BLACK Alien Attack">MEN IN BLACK Alien Attack</option>
            <option value="One Fish, Two Fish, Red Fish, Blue Fish">One Fish, Two Fish, Red Fish, Blue Fish</option>
            <option value="Popeye and Bluto's Bilge-Rat Barges">Popeye and Bluto's Bilge-Rat Barges</option>
            <option value="Poseidon's Fury">Poseidon's Fury</option>
            <option value="Pteranodon Flyers">Pteranodon Flyers</option>
            <option value="Race Through New York Starring Jimmy Fallon">Race Through New York Starring Jimmy Fallon</option>
            <option value="Revenge of the Mummy">Revenge of the Mummy</option>
            <option value="Shrek 4-D">Shrek 4-D</option>
            <option value="Skull Island: Reign of Kong">Skull Island: Reign of Kong</option>
            <option value="Storm Force Accelatron">Storm Force Accelatron</option>
            <option value="The Amazing Adventures of Spider-Man">The Amazing Adventures of Spider-Man</option>
            <option value="The Cat in the Hat">The Cat in the Hat</option>
            <option value="The High in the Sky Seuss Trolly Train Ride!">The High in the Sky Seuss Trolly Train Ride!</option>
            <option value="The Incredible Hulk Coaster">The Incredible Hulk Coaster</option>
            <option value="The Simpson Ride">The Simpson Ride</option>
            <option value="Transformers: The Ride-3D">Transformers: The Ride-3D</option>
            <option value="Woody Woodpecker's Nuthouse Coaster">Woody Woodpecker's Nuthouse Coaster</option>
        </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="date">Change Date:</Label>
            <Input name="trip-start" type="date" id="start" value={editDate} onChange={(e) => setEditDate(e.target.value)} min="2000-01-01" max="2020-12-31"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="waitTime">Edit Wait Time:</Label>
            <Input name="waitTime" value={editWaitTime} onChange={(e) => setEditWaitTime(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rideRating">Edit Rating:</Label>
            <Input type="select" id="riderrating" name="RiderRating" value={editRideRating} onChange={(e) => setEditRideRating(e.target.value)} placeholder="Ride Rating">
              <option>Ride Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="comments">Edit Comments:</Label>
            <Input name="comments" value={editComments} onChange={(e) => setEditComments(e.target.value)}/>
          </FormGroup>
          <Button id="button" type="submit">Update Your Rating!</Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default RatingEdit;