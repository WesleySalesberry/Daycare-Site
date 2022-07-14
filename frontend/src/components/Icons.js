import Container from "react-bootstrap/esm/Container"
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export const Icons = ({ size }) => {
  return (
    <Container fluid>
      <FaFacebookSquare
        size={size} 
      />
      <FaInstagram
         size={size}
      />
      <FaTwitterSquare
        size={size} 
      />
    </Container>
  )
}