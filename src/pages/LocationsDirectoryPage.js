import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import LocationsList from '../features/locations/LocationsList';
const LocationsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current="Locations" />
            <LocationsList />
        </Container>
    );
};


export default LocationsDirectoryPage;

