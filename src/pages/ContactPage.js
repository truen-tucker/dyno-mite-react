import React from 'react';
import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';
import Subheader from '../components/SubHeader';

const ContactPage = () => {
  return (
    <Container>
        <Subheader current="Contact" />
            <Row className="row-content align-items-center">
                <Col sm='3'>
                    <h3>Home Office</h3>
                    <address>
                        123 Colonial Rd.
                        <br />
                        Ann Arbor, MI 12345
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link align-items-center'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' />(321)-234-5678
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.com'
                    >
                        <i className='fa fa-envelope-o' /> dyno@dyno-mite.com
                    </a>
                </Col>
            </Row>
            <Row className="row-content">
               <ContactForm />
             
            </Row>
        </Container>
  )
}

export default ContactPage