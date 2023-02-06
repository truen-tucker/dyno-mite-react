import React from 'react';
import '../../App.css';
import { Container, Row } from 'reactstrap';
import NewsLetterForm from '../../components/NewsLetterForm';
const NewsLetter = () => {
  return (
    <>
    <section id="newsletter" className='text-white py-5'>
        <Container>
          <Row>
      <NewsLetterForm/>
          </Row>
        </Container>
    </section>
    
    </>
  )
}

export default NewsLetter