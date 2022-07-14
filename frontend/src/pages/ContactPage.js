import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import { Layout } from '../components/container/Layout';
import { ContactForm } from '../components/Forms/ContactForm';
import { Meta }   from '../components/Meta'

export const ContactPage = () => {
  return (
    <Layout>
      <Meta
        title="Contact Us"
        description= 'A way to contact us with question or enrollment process'
        url={`${window.location.href}`}
      />
      <Container className="shadow mt-4 rounded border">
        <h3 className="text-center py-3">
          Contact Us!
        </h3>
        <Row sm={1} md={2}>
          <Col className="d-none d-sm-none d-md-block pb-3">
              <iframe 
                className="border border-primary rounded"
                width="100%"
                height="600"
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.4752757278634!2d-77.94929850207014!3d34.97582923828859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89abe0125d787665%3A0x92bd80af103fe6c9!2sSandcastles%20Child%20Care!5e0!3m2!1sen!2sus!4v1657740626174!5m2!1sen!2sus"
              >
            </iframe>
        </Col>
        <Col>
          <ContactForm />
        </Col>
        </Row>
      </Container>
    </Layout>
  )
}