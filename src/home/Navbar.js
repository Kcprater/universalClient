import React, {useState} from "react";
import './Navbar.css';
import {Navbar, Nav, NavItem, Button} from "reactstrap";

const Sitebar = (props) => {

  return(
    <div>
      <div className="title">UNIVERSAL ORLANDO ATTRACTION GUIDE! </div>
      <Navbar className="bar" light expand="md"> 
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button id="logout" onClick={props.clickLogout}>Log Out</Button>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}

export default Sitebar;