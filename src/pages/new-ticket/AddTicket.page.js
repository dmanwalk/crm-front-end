import React, { useEffect, useState } from 'react'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import {Container, Row, Col} from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';
import { shortText } from '../../utils/validation';

const initialFrmDt ={
     subject:"",
     priority: 3,
     issueDate: "2020-09-01",
     detail:"",   
};
const initialFrmError ={
    subject: false,
    priority: false,
    issueDate: false,
    detail:false,   
};

export const AddTicket = () => {
    
   const [frmData,setFrmData] = useState(initialFrmDt);
   const [frmDataError,setFrmDataError] = useState(initialFrmError);

   useEffect(()=>{}, [frmData, frmDataError]);

    const handleOnChange = e =>{
        const {name,value} = e.target;
        

        setFrmData({
            ...frmData,
            [name]:value
        });   
    };

    const handleOnSubmit = async e =>{
        e.preventDefault();

        setFrmDataError(initialFrmError);
        
        const isSubjectValid = await shortText(frmData.subject);
        console.log("subject is valid",isSubjectValid)
        setFrmDataError({
            ...initialFrmError,
            subject: !isSubjectValid,
        });
        console.log("Form submit request received", frmData)


    }
 
  return (
    
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket"></PageBreadcrumb>
            </Col>
        </Row>
        
        <Row>
            <Col>
                <AddTicketForm handleOnChange={handleOnChange} frmDt={frmData} handleOnSubmit ={handleOnSubmit} frmDataError={frmDataError}/>
            </Col>
        </Row>
    </Container>
  )
}
