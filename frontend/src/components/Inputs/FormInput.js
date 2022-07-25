import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { FaEyeSlash, FaEye } from "react-icons/fa";
export const Input = ({
  handleChange,
    value,
    label,
    name,
    type="",
    isRequired = false,
    placeholder,
    hasIcon=false
}) => {

  const [isPasswordViewable, setIsPasswordViewable] = useState(true)
  const handleIconChange = () => {
    setIsPasswordViewable(!isPasswordViewable)
  }

  return (
    <Form.Group className="my-10 my-10">
      <Form.Label>{label}</Form.Label>
      <div className="d-flex">
        <Form.Control 
          type={type === "password" && isPasswordViewable ? 'password' : 'text'} 
          placeholder={placeholder}
          name={name}
          required={isRequired}
          value={value}
          onChange={handleChange} 
        />
          {
          hasIcon ? 
            isPasswordViewable ?
              <FaEye 
                size={25}
                onClick={handleIconChange}
              />
            :
              <FaEyeSlash 
                size={25}
                onClick={handleIconChange}
              />
            :
              ""
          }
      </div>
      
    </Form.Group>
  )
}