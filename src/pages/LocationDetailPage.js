import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectLocationById } from "../features/locations/locationsSlice";
import LocationDetail from "../features/locations/LocationDetail";
import SubHeader from "../components/SubHeader";

const LocationDetailPage = () => {
    const { locationId } = useParams();
    const location = selectLocationById(locationId);
    let content = (
      <>
        <LocationDetail location={location} />
      </>
    )
  return (
    <Container>
      {location && <SubHeader current={location.name} detail={true} />}
        <Row>{content}</Row>
    </Container>
  );
};

export default LocationDetailPage;