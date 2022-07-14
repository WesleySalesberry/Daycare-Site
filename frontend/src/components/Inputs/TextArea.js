import Form from 'react-bootstrap/Form';

export const TextArea = ({
  handleChange,
  value,
  label,
  labelFor,
  id,
  name,
  isRequired = false,
  placeholder,
}) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label htmlFor={labelFor}>{label}</Form.Label>
      <Form.Control as="textarea" 
        className="textarea"
        rows={11} 
        id={id}
        required={isRequired}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Group>
  )
}