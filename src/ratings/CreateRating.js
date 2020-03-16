import React, {useState} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";
import './Ratings.css';
import APIURL from '../helpers/environment'

const CreateRating = (props) => {
  // const [rider, setRider] = useState('');//may not need
  const [nameOfRide, setNameOfRide] = useState('');
  const [date, setDate] = useState('');
  const [waitTime, setWaitTime] = useState('');
  const [rideRating, setRideRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    fetch(`${APIURL}/api/rating`, {
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
        <Input type="select" id="nameOfRide" name="nameOfRide" value={nameOfRide} onChange={(e) => setNameOfRide(e.target.value)} placeholder="Name of Ride">
        <option>Attraction Name</option>
        <option value="Revenge of the Mummy">Revenge of the Mummy</option>
        <option value="Kang and Kodos' Twirl 'n' Hurl">Kang and Kodos' Twirl 'n' Hurl</option>
        <option value="Woody Woodpecker's Nuthouse Coaster">Woody Woodpecker's Nuthouse Coaster</option>
        <option value="MEN IN BLACK Alien Attack">MEN IN BLACK Alien Attack</option>
        <option value="E.T. Adventure">E.T. Adventure</option>
        <option value="Transformers: The Ride-3D">Transformers: The Ride-3D</option>
        <option value="Hogwarts Express: Kings Cross Station">Hogwarts Express: Kings Cross Station</option>
        <option value="The Simpson Ride">The Simpson Ride</option>
        <option value="Hollywood Rip Ride Rockit">Hollywood Rip Ride Rockit</option>
        <option value="Despicable Me Minion Mayhem">Despicable Me Minion Mayhem</option>
        <option value="Harry Potter and the Escape from Gringotts">Harry Potter and the Escape from Gringotts</option>
        <option value="Race Through New York Starring Jimmy Fallon">Race Through New York Starring Jimmy Fallon</option>
        <option value="Shrek 4-D">Shrek 4-D</option>
        <option value="Fast and Furious - Supercharged">Fast and Furious - Supercharged</option>
        <option value="Caro-Suess-el">Caro-Suess-el</option>
        <option value="Dudley Do-Right's Ripsaw Falls">Dudley Do-Right's Ripsaw Falls</option>
        <option value="Hogwarts Express: Hogsmeade Station">Hogwarts Express: Hogsmeade Station</option>
        <option value="The Amazing Adventures of Spider-Man">The Amazing Adventures of Spider-Man</option>
        <option value="Storm Force Accelatron">Storm Force Accelatron</option>
        <option value="One Fish, Two Fish, Red Fish, Blue Fish">One Fish, Two Fish, Red Fish, Blue Fish</option>
        <option value="The Cat in the Hat">The Cat in the Hat</option>
        <option value="Pteranodon Flyers">Pteranodon Flyers</option>
        <option value="The Incredible Hulk Coaster">The Incredible Hulk Coaster</option>
        <option value="Doctor Doom's Fearfall">Doctor Doom's Fearfall</option>
        <option value="The High in the Sky Seuss Trolly Train Ride!">The High in the Sky Seuss Trolly Train Ride!</option>
        <option value="Jurassic Park River Adventure">Jurassic Park River Adventure</option>
        <option value="Popeye and Bluto's Bilge-Rat Barges">Popeye and Bluto's Bilge-Rat Barges</option>
        <option value="Harry Potter and the Forbidden Journey">Harry Potter and the Forbidden Journey</option>
        <option value="Flight of the Hippogriff">Flight of the Hippogriff</option>
        <option value="Poseidon's Fury">Poseidon's Fury</option>
        <option value="Skull Island: Reign of Kong">Skull Island: Reign of Kong</option>
        <option value="Hagrids Magical Creatures Motorbike Adventure">Hagrids Magical Creatures Motorbike Adventure</option>
        </Input>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="date"/>
        <Input name="trip-start" type="date" id="start" value={date} onChange={(e) => setDate(e.target.value)} min="2000-01-01" max="2020-12-31">
        </Input>
        </FormGroup>
        <FormGroup>
        <Label htmlFor="waitTime"/>
        <Input name="waitTime" value={waitTime} onChange={(e) => setWaitTime(e.target.value)} placeholder="Minutes Waited"/>
        </FormGroup>
        <FormGroup>
        <Input type="select" id="riderrating" name="RiderRating" value={rideRating} onChange={(e) => setRideRating(e.target.value)} placeholder="Attraction Rating">
        <option>Attraction Rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </Input>
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