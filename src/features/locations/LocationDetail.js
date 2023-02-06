import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap';

const LocationDetail = ({ location }) => {
  const { image, name, description } = location;

  return (
    <>
      <Row className='m-5 mx-auto'>
          <CardTitle><h2>{name}</h2></CardTitle>
        <Col md='6'>
          <Card >
            <CardImg top src={image} alt={name} />
          </Card>
        </Col>
        <Col md='6'>
          <Card >
            <CardBody>
              <Col >
                <CardText><h4>{description}</h4></CardText>
              </Col>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default LocationDetail