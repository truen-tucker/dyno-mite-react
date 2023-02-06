import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import '../App.css';
import NewsLetterForm from '../features/home/NewsLetter';
import ShowCase from '../features/home/ShowCase';
// import HomeCarousel from '../features/HomeCarousel';

function HomePage() {
  return (
    <>
      <ShowCase />
      <Row className='row-content'>
        <Col className='mt-3 mx-auto align-items-center'>
          <Card className='p-3 m-4'>
            <h3>Welcome to Dyno-Mite Gyms</h3>
            <p>
              We are pround to be one of the best rock climbing gym organizations in the North America.
    
              We are growing and expanding at a rate we can't keep up with! With 14 more gyms opening in the coming year, we are thrilled to provide the public with indoor and ourdoor adventures. 
             The cornerstone to our success is our climbing community who meet and exhange exhilerating experiences at all of our locations.
            </p>
          </Card>
        </Col>
      </Row>
      <Row>
        <NewsLetterForm />
      </Row>
    </>
  );
}

export default HomePage;