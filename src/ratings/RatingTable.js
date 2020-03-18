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
          <td className="tdName">{riderrating.nameOfRide}</td>
          <td className="tdDate">{riderrating.date}</td>
          <td className="tdWait">{riderrating.waitTime}</td>
          <td className="tdRate">{riderrating.rideRating}</td>
          <td className="tdCom">{riderrating.comments}</td>
          <td>
            <Button id="update" color="primary" onClick={() => {props.editUpdateRating(riderrating); props.updateOn()}}>Update</Button>
            <Button id="delete" color="danger" onClick={() => {deleteRating(riderrating)}}>Delete</Button>
          </td>
        </tr>
      )
    })
  }
      
  return(
    <div>
      <h2>Rating History</h2>
      <hr/>
      <Table className="table-main">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th className="name">Attraction Name</th>
            <th className="date">Date</th>
            <th className="wait">Wait Time (minutes)</th>
            <th className="rating">Attraction Rating</th>
            <th className="comments">Comments</th>
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