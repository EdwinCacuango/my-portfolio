import React, { useState } from 'react';
import { Button } from '../UI/Button';
import axios from 'axios';

export default function FormContact() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: "https://formspree.io/f/xqknjvvd",
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Gracias, tu mensaje fue enviado.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <section className="section-home" id="contact">
            <div className='w-full'>
            <h2 className='title-2 mt-36'>0.4 Contáctame</h2>
            <div className='flex'>
                <div className='w-[60%]'>
                    <form onSubmit={handleOnSubmit} className="flex flex-col mt-4 gap-3">
                        <label htmlFor="email" className='title-3'>Email</label>
                        <input
                            id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                            className="input-field h-10"
                        />
                        <label htmlFor="message" className='title-3'>Tu mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                            className="input-field h-40 text-sm"
                        />
                        <Button type="submit" disabled={status.submitting}>
                            {!status.submitting
                                ? !status.submitted
                                    ? 'ENVIAR'
                                    : 'Enviado'
                                : 'Enviando...'}
                        </Button>
                    </form>
                    {status.info.error && (
                        <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && <p className='my-4 title-3'>{status.info.msg}</p>}
                </div>
                <div className='w-[40%]'>
                    <img src="/email-foto.svg" alt="" />
                </div>
            </div>
            </div>
        </section>
    );
};
