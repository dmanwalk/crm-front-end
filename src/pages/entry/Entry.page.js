import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.comp';
import { PasswordReset } from '../../components/password-reset/PasswordReset.comp';

import './entry.style.css';

export const Entry = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[frmLoad, setFrmLoad] = useState('login')
  //here we define a function that just gets the name and value of the target and prints it within the console log
  const handleOnChange = e =>{
    const {name,value} = e.target;

    switch(name){
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      default:
        break;
    }

  };

  const handleOnSubmit = e =>{//used for handling the password default login page submission
    e.preventDefault(); //prevent reloading of page on submit

    if(!email || !password){
      return alert("An email and password is required to login!");
    }

    //TODO call api to submit the form
    console.log(email,password);
  };

  const handleOnResetSubmit = e =>{//used for handling the password reset page submission
    e.preventDefault(); //prevent reloading of page on submit

    if(!email){
      return alert("An email is required to reset login!");
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = frmType=>{
    setFrmLoad(frmType); //set either login or reset page as the page to load depending on FrmLoad state
  }
  //below we pass the handleOnChange function and give it the same name within the LoginForm
  return (
    <div className='entry-page bg-info'>
    <Card className='form-box'>

      <Card.Body>
        
      {frmLoad === 'login' && <LoginForm handleOnChange = {handleOnChange}
        email={email}
        pass={password}
        handleOnSubmit = {handleOnSubmit}
        formSwitcher = {formSwitcher}/> }
        
        {frmLoad === 'reset' && <PasswordReset handleOnChange = {handleOnChange}
        email={email}
        handleOnResetSubmit = {handleOnResetSubmit}
        formSwitcher = {formSwitcher}/>}
      </Card.Body>   
    </Card>
    </div>
  )
}
