import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import "./auth.css"
import APIURL from '../helpers/environment'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(email && password) {
    fetch(`${APIURL}/api/user/login`, {
      method: "POST",
      body: JSON.stringify({user: {email: email, password: password}}),
      headers: new Headers ({
        "Content-Type": "application/json"
      })
    }).then(
      (response) => response.json()
      ).then((data) => {
        props.setToken(data.sessionToken);
      })
  } else {
    alert("All Input Fields Must Be Complete!")
  }
}

  return(
    <div>
      <h1>Login</h1>
      <Form id="login" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
        </FormGroup>
        <Button id="button" type="submit">Login</Button>
      </Form>
    </div>
  )
}

export default Login;