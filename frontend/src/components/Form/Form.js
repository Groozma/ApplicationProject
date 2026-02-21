import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const form = useRef();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || subject === '' || message === '') {
            setIsInvalid(true);
        }
        else {
            setIsInvalid(false);
            emailjs
            .sendForm('service_b6gkh8d', 'template_1ptipct', form.current, {
                publicKey: 'GH2Hwd5DAh6TeNLf8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setEmailSent(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
    };
    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                <label>
                    Name:
                    <input
                        type="text"
                        maxLength={50}
                        value={name}
                        onChange={handleNameChange}
                        name="name"
                        />
                </label>
                </div>
                <div>
                <label>
                    Email:
                    <input
                        type="email"
                        maxLength={75}
                        value={email}
                        onChange={handleEmailChange}
                        name="email"
                        />
                </label>   
                </div>
                <div>         
                <label>
                    Subject:
                    <input
                        type="text"
                        maxLength={100}
                        value={subject}
                        onChange={handleSubjectChange}
                        name="title"
                        />
                </label>
                </div>
                <div>
                <label>
                    Message:
                    <textarea
                        type="text"
                        maxLength={1000}
                        value={message}
                        onChange={handleMessageChange}
                        name="message"
                        />
                </label>
                </div>
                {isInvalid && (
                    <div>Please fill in all boxes</div>
                )}
                <button>Submit</button>
                {emailSent && (
                    <div>Email Sent!</div>
                )}
            </form>
        </>
    )
}

export default Form;