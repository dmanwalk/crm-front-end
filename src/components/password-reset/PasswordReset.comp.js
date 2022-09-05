import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { propTypes } from 'prop-types';

export const PasswordReset = ({handleOnChange, email, formSwitcher, handleOnResetSubmit}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control autoComplete='off' type="email" name="email" placeholder='Enter email' value={email} onChange={handleOnChange} required ></Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button className="submit-button" type="submit">Reset Password</Button>
                </Form>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col><a href='#!' onClick={()=>formSwitcher('login')}>Login</a></Col>
        </Row>
        </Container>
  )
}
