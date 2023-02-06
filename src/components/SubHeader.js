import {  Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
    return (

        <>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Dyno-Mite</Link>
                </BreadcrumbItem>
                {detail && (
                    <BreadcrumbItem>
                        <Link to='/locations-directory'>Locations</Link>
                    </BreadcrumbItem>
                )}
                <BreadcrumbItem active>{current}</BreadcrumbItem>
            </Breadcrumb>
        </>
    );
};

export default SubHeader;