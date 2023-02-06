import { Button, Col, FormGroup, Container } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const NewsLetterForm = () => {
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
                agree: false,
                contactType: 'By Phone',
                feedback: '',
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Container className='px-5'>
                <Form id='newsletterForm' className='p-4 col-sm-8 rounded' >
                    <FormGroup row>
                        <h2 className='mb-3 text-white display-5'>Sign up for our News Letter</h2>
                        <h4> Stay in the know for upcoming events </h4>
                        <Col md='6'>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control'
                            />
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                        <Col md='6'>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control'
                            />
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md='6'>
                            <Field
                                name='email'
                                placeholder='Email'
                                type='email'
                                className='form-control'
                            />
                            <ErrorMessage name='email'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Button id='submitButton' type='submit' className='btn-lg'>
                            Submit
                        </Button>
                    
                </FormGroup>
                </Form>
            </Container>
        </Formik>
    )
};

export default NewsLetterForm;