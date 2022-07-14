import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import { PrimaryButtonOutline } from '../Buttons/OutlinedButton';
import { Input } from '../Inputs/FormInput';
import { TextArea } from '../Inputs/TextArea';

import { FaEnvelope } from "react-icons/fa";
import Message from '../../API/Message';

export const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail ] = useState('');
  const [subject, setSubject ] = useState('');
  const [message, setMessage ] = useState('');
  
  const name = `${firstName} ${lastName}`
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

  const createMessage = async (data) => {
    await Message.publicMessage.postMessage(data)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createMessage(data)
  }
  return (
    <form onSubmit={handleSubmit} className="h-100 rounded">
      <Row>
        <Col>
        <Input
          label="First Name"
          name="firstName"
          isRequired={true}
          placeholder="First Name"
          handleChange={(evt) => setFirstName(evt.target.value)}
        />

        </Col>
        <Col>
          <Input
            label="Last Name"
            name="lastName"
            isRequired={true}
            placeholder="Last Name"
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
            handleChange={(evt) => setEmail(evt.target.value)}
          />
          <Input
            label="Subject"
            name="subject"
            isRequired={true}
            placeholder="Your Subject"
            handleChange={(evt) => setSubject(evt.target.value)}
          />
          <TextArea
            label="Message"
            name="message"
            isRequired={true}
            placeholder="Your Message"
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