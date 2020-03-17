import React from "react";
import {Table, Button} from "reactstrap";
import './Ratings.css';
import APIURL from '../helpers/environment'

const RatingTable = (props) => {
  const deleteRating = (riderrating) => {
    fetch(`${APIURL}/api/rating/${riderrating.id}`, {
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
            <Button size="small" id="update" color="primary" onClick={() => {props.editUpdateRating(riderrating); props.updateOn()}}>Update</Button>
            <Button size="small" id="delete" color="danger" onClick={() => {deleteRating(riderrating)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }
      
  return(
    <div>
      <h3>Rating History</h3>
      <hr/>
      <Table className="table-main">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Attraction Name</th>
            <th>Date</th>
            <th>Wait Time (minutes)</th>
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