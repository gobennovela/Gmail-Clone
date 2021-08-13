import React from 'react';
import "./SendMail.css";
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
import 'firebase/firestore';

function SendMail() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        );
        dispatch(closeSendMessage())
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" 
                onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name="to" 
                placeholder="To" 
                type="email" 
                autoComplete = "off"
                {...register("to", { required: "Required",})}/>
                {errors.to && <p className="sendMail__error">To is Required!</p>}

                <input 
                name="subject" 
                placeholder="Subject" 
                type="text" 
                {...register("subject", { required: "Required",})} />
                 {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                
                <input 
                name="message" 
                placeholder="Message..." 
                type="text" 
                className="sendMail__message" 
                {...register("message", { required: "Required",})}
                 />
                  {errors.message && <p className="sendMail__error">Message is Required!</p>}

                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit" 
                    className="sendMail__send" >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
