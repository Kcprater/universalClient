import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import "./auth.css"

const Auth = (props) => {
  return (
    <div className="main">
      <Container id="signup-con">
        <Row>
          <Col md='12'>
            <Signup setToken={props.setToken}/>
          </Col>
        </Row>
      </Container>
      <Container id="login-con">
        <Row>
          <Col md='12'>
            <Login setToken={props.setToken}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Auth;