import { Row, Col, Card } from "reactstrap";
import { selectAllLocations } from "./locationsSlice";
import LocationCard from "./LocationCard"

const LocationsList = () => {
    const locations = selectAllLocations();
    return (
        <Row className="mx-auto">
            {locations.map((location) => {
                return (
                    <Col
                        md='5'
                        className='m-4 text-center'
                        key={location.id}
                    >
                        <LocationCard location={location} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default LocationsList
