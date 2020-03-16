import React from "react";
import {Table, Button} from "reactstrap";
import APIURL from '../helpers/environment'

const RatingTable = (props) => {
  const deleteRating = (riderrating) => {
    fetch(`http://${APIURL}/api/rating/${riderrating.id}`, {
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
          {/* <th scope="row"></th> */}
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
            {/* <th>#</th> */}
            <th>Attraction Name</th>
            <th>Date</th>
            <th>Wait Time In Minutes</th>
            <th>Attraction Rating</th>
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