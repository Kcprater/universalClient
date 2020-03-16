import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment'

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [passwordhash, setPasswordHash] = useState('');

  const handleSubmit = (event) => {
//prevent default was here
    fetch(`${APIURL}/api/user`, {
      method: "POST",
      body: JSON.stringify({user:{email: email, passwordhash: passwordhash}}),//change passwordhash to password? setPasswordHash below would need changed as well
      headers: new Headers ({
        "Content-Type": "application/json"
      })
    }).then(
      (response) => response.json()
    ).then((data) => {
      props.setToken(data.sessionToken)
    })
    event.preventDefault();
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <Form id='signup' onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" onChange={(e) => setPasswordHash(e.target.value)} name="password" value={passwordhash}/>  
        </FormGroup>
        <Button id="button" type="submit">Signup</Button>
      </Form>
    </div>
  )
}

export default Signup;