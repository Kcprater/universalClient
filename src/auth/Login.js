import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import "./auth.css"

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    fetch("http://localhost:3000/api/user/login", {
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
      event.preventDefault();
  }

  return(
    <div>
      <h1>Login</h1>
      <Form id="login" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
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