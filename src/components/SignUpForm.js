import { Button, Label, Col, FormGroup, Row, Input } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const SignUpForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                agree: false,
                contactType: 'By Phone',
                feedback: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <Label><h2>Membership Sign Up Form</h2></Label>
                <Row className="row-content align-items-center">
                    <h3 className='mb-4'>Choose Your Gym and Membership type</h3>
                    <Col md={3}>
                        <Label for='membership'>
                            <h4 >Membership Type</h4>
                        </Label>
                        <Input
                            id="membership"
                            name="membership"
                            type="select"
                        >
                            <option selected>
                                Choose Membership
                            </option>
                            <option>
                                Adult Monthly ($70)
                            </option>
                            <option>
                                Student Monthly ($60)
                            </option>
                            <option>
                                Youth Monthly ($50)
                            </option>
                            <option>
                                Senior Monthly ($45)
                            </option>
                        </Input>
                    </Col>
                    <Col md={3} className='mt-3'>
                        <Label for='gym'>
                            <h4>Home Gym</h4>
                        </Label>
                        <Input
                            id="gym"
                            name="gym"
                            type="select"
                        >
                            <option selected>
                                Choose Home Gym
                            </option>
                            <option>
                                Detroit, MI
                            </option>
                            <option>
                                St. Paul, MN
                            </option>
                            <option>
                                San Francisco, CA
                            </option>
                            <option>
                                Oakland, CA
                            </option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='firstName' md='2' >
                                <h4>First Name</h4>
                            </Label>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control'
                            />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='lastName' md='2' >
                                <h4>Last Name</h4>
                            </Label>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control'
                            />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='email' md='2' >
                                <h4>Email</h4>
                            </Label>
                            <Field
                                name='email'
                                placeholder='tbone@email.com'
                                className='form-control'
                            />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label htmlFor='phoneNum' md='2' >
                                <h4>Phone</h4>
                            </Label>
                            <Field
                                name='phoneNumb'
                                placeholder='(123)-123-4567'
                                className='form-control'
                            />
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="address1">
                            <h4>Address</h4>
                        </Label>
                        <Field
                            name='address1'
                            placeholder='Address 1'
                            className='form-control'
                        />
                        <Field
                            name='address2'
                            placeholder='Address 2'
                            className='form-control mt-2'
                        />
                    </FormGroup>

                </Col>

                <Row>
                    <Col md={3}>
                        <FormGroup>

                            <Field
                                name='city'
                                placeholder='City'
                                className='form-control'
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                            <Field
                                name='state'
                                placeholder='State'
                                className='form-control'
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Field
                                name='zip'
                                placeholder='ZIP'
                                className='form-control'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Row className='p-5'>
                        <Button type='submit'>
                            <h4>Submit</h4>
                        </Button>
                    </Row>
                </FormGroup>
            </Form>

        </Formik>
    )
};

export default SignUpForm;