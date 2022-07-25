import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';

import { PrimaryButton } from '../Buttons/Button';
import { Input } from '../Inputs/FormInput'

export const Login = () => {
  const navigate = useNavigate();
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(email, password)
    navigate('/dashboard')

  }

  return(
    <Container className="shadow rounded border my-auto">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column">
        <Input
          label="Email"
          name="email"
          isRequired={true}
          placeholder="Email"
          value={email}
          handleChange={(evt) => setEmail(evt.target.value)}
        />
        <Input
          label="Password"
          name="password"
          isRequired={true}
          type="password"
          placeholder="Password"
          value={password}
          handleChange={(evt) => setPassword(evt.target.value)}  
          hasIcon={true}
        />
        <div className="mt-3">
          <PrimaryButton
            style="w-100"
          >
            Submit
          </PrimaryButton>
        </div>
      </form>
    </Container>
  )
}

{/*  */}