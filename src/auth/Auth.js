import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import "./auth.css"
import APIURL from '../helpers/environment'

const Auth = (props) => {
  return (
    <Container id="auth-con">
      <Row>
        <Col md='12'>
          <Signup setToken={props.setToken}/>
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <Login setToken={props.setToken}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Auth;