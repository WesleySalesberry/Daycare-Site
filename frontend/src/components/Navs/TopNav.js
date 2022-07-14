import { Link } from "react-router-dom"

import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icons } from "../Icons";
import { FaPhoneAlt } from "react-icons/fa";

export const TopNav = () => {
  return (
    <Container fluid className="text-center d-none d-sm-none d-md-block rounded">
      <Row>
        <Col md={4} className="py-1">
          <Link 
            to='/contact'
            className="text-decoration-none"
          >
            <address>
            283 HWY 11{" "}
            Kennesville, NC 28572
          </address>
          </Link>
        </Col>
        <Col md={4} className="py-1">
          <a className="text-decoration-none" href="tel:(555)555-5555">
            Call Us at <FaPhoneAlt />{' '}(555)555-5555
          </a>
        </Col>
        <Col md={4} className="py-1">
          <Icons
            size={28} 
          />
        </Col>
      </Row>
    </Container>
  )
}
