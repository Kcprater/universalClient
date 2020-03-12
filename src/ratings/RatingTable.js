import React from "react";
import {Table, Button} from "reactstrap";

const RatingTable = (props) => {
  const deleteRating = (riderrating) => {
    fetch(`http://localhost:3000/api/rating/${riderrating.id}`, {
      method: "DELETE",
      headers: new Headers ({
        "Content-Type": "application/json",
        "Authorization": props.token
      })
    })
    .then(() => props.fetchRatings())
  }

  const riderratingMapper = () => {
    return props.riderratings.map((riderrating, index) => {
      return(
        <tr key={index}>
          <th scope="row">{riderrating.id}</th>
          <td>{riderrating.nameOfRide}</td>
          <td>{riderrating.date}</td>
          <td>{riderrating.waitTime}</td>
          <td>{riderrating.rideRating}</td>
          <td>{riderrating.comments}</td>
          <td>
            <Button color="info" onClick={() => {props.editUpdateRating(riderrating); props.updateOn()}}>Update Rating</Button>
            <Button color="danger" onClick={() => {deleteRating(riderrating)}}>Delete Rating</Button>
          </td>
        </tr>
      )
    })
  }
      
  return(
    <div>
      <h3>Rating History</h3>
      <hr/>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name of Ride</th>
            <th>Date</th>
            <th>Wait Time</th>
            <th>Ride Rating</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {riderratingMapper()}
        </tbody>
      </Table>
    </div>
  )
}

export default RatingTable;