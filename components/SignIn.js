import { Button, Form } from "react-bootstrap";
import useForm from "../lib/useForm";
import axios from 'axios';



export default function SignIn() {

  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  })

  function signin(inputs) {
    axios
      .post("/api/sessions", inputs)
      .then(response => {
        axios.defaults.headers.common["Authorization"] = "Bearer" + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);

        console.log(response.data);
      })
      .catch(error => {
        if (error) {
          alert('Invalid Email or Password')
        }
        inputs = {};
      })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signin(inputs);
    resetForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign In To Your Account</h2>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" autoComplete="email" value={inputs.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" autoComplete="password" value={inputs.password} onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
