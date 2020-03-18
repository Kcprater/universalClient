import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import "./auth.css"
import APIURL from '../helpers/environment'

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [passwordhash, setPasswordHash] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if(passwordhash.length < 5) {
      alert('Password must be at least 5 characters')
    } else {
      fetch(`${APIURL}/api/user`, {
        method: "POST",
        body: JSON.stringify({user:{email: email, passwordhash: passwordhash}}),
        headers: new Headers ({
          "Content-Type": "application/json"
        })
      }).then(
        (response) => response.json()
        ).then((data) => {
          console.log(data);
          props.setToken(data.sessionToken)
        })
      }
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <Form id='signup' onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input autoComplete="off" type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input autoComplete="off" type="password" onChange={(e) => setPasswordHash(e.target.value)} name="password" value={passwordhash}/>  
        </FormGroup>
        <Button id="button" type="submit">Signup</Button>
      </Form>
    </div>
  )
}

export default Signup;