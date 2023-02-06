import {  Container, Row } from "reactstrap";
import SignUpForm from "../components/SignUpForm";
import MemberShipTable from "../components/MembershipTable";
import SubHeader from "../components/SubHeader";
const SignUpPage = () => {
    return (
        <>
        <Container>
        <SubHeader current='Sign-Up' />

        </Container>
        <Container className="sign-up-container">

        </Container>
            <Container>
                <Row className="mt-4">
                    <MemberShipTable />
                </Row>
                <Row>
                    <SignUpForm />
                </Row>
            </Container>
        </>
    );
}

export default SignUpPage;