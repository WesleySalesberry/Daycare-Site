import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { Icons } from "../Icons"

export const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container className="text-center">
         <Row>
          <Col md={6}>
                <h3>Sandcastles Child Care</h3> 
          </Col>
          <Col md={6}>
            <Icons
              size={22} 
            />
          </Col>
        </Row>
        <div className="text-muted">
          Copyright {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  )
}