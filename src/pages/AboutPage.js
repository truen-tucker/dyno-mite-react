import React from 'react';
import '../App';
import { Container, Row, Col, Card, CardBody, CardHeader, CardText } from 'reactstrap';
import Rock2 from '../app/assets/img/rockclimb2.jpg'
import Rock3 from '../app/assets/img/rockclimb3.jpg'
import WR from '../app/assets/img/weightroom.jpeg'
import Youths from '../app/assets/img/youth.jpeg'
import Yoga from '../app/assets/img/yoga.jpeg'
import Gear from '../app/assets/img/Rock-Climbing-Gear.jpeg'
import Beer from '../app/assets/img/beer.jpeg'
import SubHeader from '../components/SubHeader';

const AboutPage = () => {
    return (
        <>
            <section id="about" className=" bg-light">
                <Container>
                    <SubHeader current='About' />
                    <Row className='pt-5'>
                        <Col className='text-center'>
                            <div className='info-header mb-5'>
                                <h1 className='pb-3'>
                                    Why Our Gym?
                                </h1>
                                <p className='lead pb-3'>
                                    You'd be surprised on what we have to offer.
                                </p>
                            </div>
                        </Col>
                        <Row className='py-5'>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>Amazing Community</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                           We are commited to create a space that is your home away from home. Join our community of beginner to veteran climbers. We host numerous meetups and groups so you can find your climbing fam.  
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Rock2} width={500} alt='rock1' />
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Rock3} width={500} height={300} alt='rock3' />
                            </Col>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3> Take a Class with Us </h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            From boulding to top roping, we offer classes that will give you the skills to crush on and off the walls. 
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>
                        <Row className='py-5'>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>Yoga Studio </h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Our heated yoga space is a perfect environment to get a positive start to your day. We offer early morning yoga classes from beginner level to advanced.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Yoga} width={500} alt='yoga' />
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={WR} width={500} alt='weight-room' />
                            </Col>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>Full Size Weight Room</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Our gyms come stocked with state of the art exercise machines and free weights for you to engage your beast mode. 
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>Youth Programs</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Keep the kids up and at 'em. We provide affordable after school programs and summer camps for kids ages 6-17.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Youths} width={500} alt='youths' />
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Gear} width={500} alt='gear' />
                            </Col>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>Discounts on Gear</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                            Climbing gear is expensive. When you purchase a monthy membership you will get discounts on rental gear and equipment from our gyms. You will also recieve a 15% discount on select outdoor brands that we have partnered with. 
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='py-5'>
                            <Col md='6'>
                                <Card className='mb-4'>
                                    <CardHeader className='text-center'>
                                        <h3>We Got Beer</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <CardText>
                                           Did we say that we got beer? After a intense climbing session there is nothing more rewarding that cold beer with the buds. Thats why at Dyno-Mite Gyms we source our beer from local breweries to provide you with nothing but the best.
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6' className='d-none d-md-block'>
                                <img src={Beer} width={500} alt='Beer' />
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutPage;