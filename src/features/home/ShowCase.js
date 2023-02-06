import React from 'react';
import '../../App.css';
import { Container, Row, Col, Button } from 'reactstrap';
// import HomeCarousel from '../HomeCarousel';

const ShowCase = () => {
    return (
        <>
            <section id='showcase' className='py-5 '>
                <div className='primary-overlay text-white'>
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className='col-lg-6 text-center'>
                                <h2 className="display-2 mt-5 pt-5">
                                    Reach New Heights
                                </h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section id='span-info'>
                <div className='text-white'>
                    <Container>
                        <Row className='justify-content-center py-4'>
                            <Col className='col-lg-4 text-center'>
                                <h3 className="display-4">
                                    4
                                </h3>
                                <h5>Locations</h5>
                            </Col>
                            
                            <Col className='col-lg-4 text-center'>
                                <h3 className="display-4">
                                    14
                                </h3>
                                <h5>Classes Offered</h5>
                            </Col>
                            <Col className='col-lg-4 text-center'>
                                <h3 className="display-4">
                                    120,000
                                </h3>
                                <h5>sqft of Climbing Walls </h5>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ShowCase