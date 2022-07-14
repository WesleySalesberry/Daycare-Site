import { Container, Row } from "react-bootstrap"

export const MessageCardLayout = ({ children }) => {
  return(
    <Container className="my-5">
        <Row xs={1} md={1} className="gy-4 d-flex justify-content-center">
          { children }
        </Row>
    </Container>
  )
}