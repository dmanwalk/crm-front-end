import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { propTypes } from 'prop-types';

//Here we deconstruct the parameter(or function in this case) and force the email.control element to call handleOnChange when the onChange event is called on the element
export const LoginForm = ({handleOnChange, email, pass, handleOnSubmit, formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Client Login</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control autoComplete='off' type="email" name="email" placeholder='Enter email' value={email} onChange={handleOnChange} required ></Form.Control>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoComplete='off' type="password" name="password" value={pass} onChange={handleOnChange} placeholder='Enter password' required></Form.Control>
                    </Form.Group>
                    <br/>
                    <Button className="submit-button" type="submit">Login</Button>
                </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col><a href='#!' onClick={()=>formSwitcher('reset')}>Forgot Password</a></Col>
        </Row>
        </Container>
  );
};


