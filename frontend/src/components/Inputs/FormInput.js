import Form from 'react-bootstrap/Form';

export const Input = ({
  handleChange,
    value,
    label,
    name,
    type="text",
    isRequired = false,
    placeholder,
}) => {
  return (
    <Form.Group className="my-10 my-10">
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type} 
        placeholder={placeholder}
        name={name}
        required={isRequired}
        value={value}
        onChange={handleChange} 
      />
    </Form.Group>
  )
}