import { LOCATIONS } from "../../app/shared/LOCATIONS";

export const selectAllLocations = () => {
    return LOCATIONS;
};

export const selectLocationById = (id) => {
    return LOCATIONS.find((location) => location.id === parseInt(id));
};
export const selectFeaturedLocation = () => {
    return LOCATIONS.find((location) => location.fe);
};