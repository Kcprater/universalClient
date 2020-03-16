import React, {useState} from "react";
import './Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
// import { Route, Link, Switch} from 'react-router-dom';
// import Home from './Home' //<Route exact path="/home">Home /></Route>
// import logo from '../assets/logo2.png';

const Sitebar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }

//deleted href="/" after navbarbrand
  return(
    <div>
    <div className="title">UNIVERSAL ORLANDO ATTRACTION GUIDE! </div>
    <Navbar className="bar" light expand="md">
      <NavbarBrand></NavbarBrand>
      <NavbarToggler onClick={toggle}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
          <Button id="logout" onClick={props.clickLogout}>Log Out</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  )
}

export default Sitebar;