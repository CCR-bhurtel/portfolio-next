import React, { useState, useEffect } from 'react';
import vector from '../public/images/vector_contact.png';
// import dev from "../public/images/developer_sitting.svg";
import dev from '../public/images/developer_thinking.png';
import Alert from './Alert';
import * as emailjs from 'emailjs-com';
import Image from 'next/image';

function Contact(props) {
    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState({
        message: 'Message sent successfully',
        type: 'error',
    });

    const submit_form = async (e) => {
        e.preventDefault();

        try {
            let res = await emailjs.sendForm(
                'service_2lr2vmn',
                'template_5wntkvr',
                e.target,
                'user_xKjnEiz2TrzHygDYVtChk'
            );
            if (res.status == 200) {
                setAlert({
                    ...alert,
                    message: 'Message sent successfully',
                    type: 'success',
                });
                setShowAlert(true);
                e.target.name.value = '';
                e.target.email.value = '';
                e.target.phone.value = '';
                e.target.message.value = '';
            } else {
                setAlert({
                    ...alert,
                    message: 'Error sending email',
                    type: 'error',
                });
                setShowAlert(true);
            }
        } catch (err) {
            setAlert({
                ...alert,
                message: 'Error sending email',
                type: 'error',
            });
            setShowAlert(true);
        }
        setTimeout(() => setShowAlert(false), 2000);
    };
    return (
        <div id="contact" className="contact toggleOption contactwala">
            <div className="contact-vector">
                <div className="vector-image"></div>
                <div className="contact-title">
                    <h3 className="contact-head">Contact</h3>
                    <div className="bar"></div>
                </div>
            </div>

            <div className="contact-body">
                <div className="contact-section reveal">
                    <div className="form-image">
                        <Image src={dev} alt="Developer" />
                    </div>
                    <div className="form">
                        {showAlert && <Alert message={alert.message} type={alert.type} />}
                        <form onSubmit={submit_form} action="" className="contact_form" id="contact_form">
                            <p className="form-title">Have a question? I have answers.</p>

                            <div className="input-group">
                                <input name="name" id="name" type="text" placeholder="Name" required />
                            </div>
                            <div className="input-group">
                                <input name="email" id="email" type="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <input id="phone" type="phone" name="phone" placeholder="Contact No. (Optional)" />
                            </div>
                            <div className="input-group textarea">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    cols="30"
                                    rows="10"
                                    required
                                ></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Contact);
