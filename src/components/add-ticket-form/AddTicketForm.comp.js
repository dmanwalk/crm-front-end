import React from 'react'
import { Form, Button,Row,Col } from 'react-bootstrap';
import './add-ticket-form.style.css'


export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt, frmDataError}) => {
    //Sconsole.log(frmDt)
    return (
    <div className='add-new-ticket mt-3 bg-light'>
        <h1 className='text-center'>Add New Ticket</h1>
        <hr/>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Subject</Form.Label>
                <Col sm={9}>
                <Form.Control autoComplete='off' name="subject" placeholder='Enter subject' 
                 value={frmDt.subject}
                 
                 maxLength="500"
                 onChange={handleOnChange}
                  required ></Form.Control>
                  </Col>
                  <Form.Text className='text-danger'>{frmDataError.subject && "Subject must be greater than 3 characters and less than 100 characters"}</Form.Text>
            </Form.Group>
            <br/>
            <Form.Group as={Row}>
                <Form.Label column sm="3">Priority</Form.Label>
                <Col sm={9}>
                    <Form.Control autoComplete='off'
                    type="number" min="1" max="3" name="priority" rows="5" 
                    value={frmDt.priority} 
                    onChange={handleOnChange}
                    required></Form.Control>
                </Col>
            </Form.Group>
            <br/>
            <Form.Group as={Row}>
                <Form.Label column sm={3}>Issue Date</Form.Label>
                <Col sm={9}>
                <Form.Control autoComplete='off'
                 type="date"
                name="issueDate" 
                value={frmDt.issueDate} 
                onChange={handleOnChange}
                 required></Form.Control>
                </Col>
                
            </Form.Group>
            <br/>
            <Form.Group as={Row}>
                <Form.Label>Details</Form.Label>
                <Form.Control autoComplete='off'
                as="textarea" name="detail" rows="5" 
                value={frmDt.detail} 
                onChange={handleOnChange}
                minLength="4"
                 maxLength="2500"
                 required></Form.Control>
            </Form.Group>
            <br/>
            <Button className="submit-button" type="submit" variant="info" block="true">Submit Ticket</Button>
        </Form>
    </div>
  )
}
