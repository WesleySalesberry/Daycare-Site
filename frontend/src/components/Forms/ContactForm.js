import { useState } from 'react';

import { Row, Col, Alert } from 'react-bootstrap';

import { PrimaryButtonOutline } from '../Buttons/OutlinedButton';
import { Input } from '../Inputs/FormInput';
import { TextArea } from '../Inputs/TextArea';

import { FaEnvelope } from "react-icons/fa";
import Message from '../../API/Message';

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail ] = useState('');
  const [subject, setSubject ] = useState('');
  const [message, setMessage ] = useState('');
  const [success, setSuccess ] = useState('');
  
  const name = `${firstName} ${lastName}`
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

  const createMessage = async (data) => {
    const res = await Message.publicMessage.postMessage(data)
    setSuccess(res.data)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    setFirstName(' ')
    setLastName(' ')
    setEmail(' ')
    setSubject(' ')
    setMessage(' ')

    createMessage(data) 
  }

  setTimeout(() => {
    setSuccess('')
  }, 5000)

  return (
    <form onSubmit={handleSubmit} className="h-100 rounded">
      <Row>
        {
          success ?
            <Alert className="text-center">
              <h5>{success}</h5>
            </Alert>
          :
            ""
        }
        <Col>
        <Input
          label="First Name"
          name="firstName"
          isRequired={true}
          placeholder="First Name"
          value={firstName}
          handleChange={(evt) => setFirstName(evt.target.value)}
        />

        </Col>
        <Col>
          <Input
            label="Last Name"
            name="lastName"
            isRequired={true}
            placeholder="Last Name"
            value={lastName}
            handleChange={(evt) => setLastName(evt.target.value)}
          />

        </Col>
        </Row>
          <Input
            label="Email"
            name="email"
            type='email'
            isRequired={true}
            placeholder="Email"
            value={email}
            handleChange={(evt) => setEmail(evt.target.value)}
          />
          <Input
            label="Subject"
            name="subject"
            isRequired={true}
            placeholder="Your Subject"
            value={subject}
            handleChange={(evt) => setSubject(evt.target.value)}
          />
          <TextArea
            label="Message"
            name="message"
            isRequired={true}
            placeholder="Your Message"
            value={message}
            handleChange={(evt) => setMessage(evt.target.value)}
          />
          <PrimaryButtonOutline
            style="w-100 my-3"
          >
            <FaEnvelope /> Send 
          </PrimaryButtonOutline>
    </form>
  )
}