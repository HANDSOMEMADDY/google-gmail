import { Button } from '@material-ui/core';
import  CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/UserSlice';
import './sendmail.css'

function SendMail() {
      
     const {register,handleSubmit,watch,errors } = useForm();

     const dispatch = useDispatch()

     const onSubmit = (data) => {
        console.log(data)
     }
    
  return (
    <div className='sendmail'>
        <div className='sendmail-header'>
            <h3>New Message</h3>
            <CloseIcon className='sendmail-closed' onClick={() => dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input  name="to"  placeholder='To' type='text' ref={register({ required: true})}/>
            {errors.to && <p className='sendmail-error'>To is requried</p>}
            <input name="subject" type='text' placeholder='subject'     ref={register({ required: true})}/>
            {errors.subject && <p className='sendmail-error'>subject is requried</p>}
            <input name="message"  type='text' placeholder='message...' className='sendmail-message'   ref={register({ required: true})}/>
            {errors.message && <p className='sendmail-error'>message is requried</p>}

            <div className='sendmail-option'>
                <Button className='sendmail-send'>
                    SendMail
                </Button>
            </div>
        </form>
    </div>
  )
}
export default SendMail;