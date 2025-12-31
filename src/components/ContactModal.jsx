import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [errorMessage, setErrorMessage] = useState(''); // Store specific error detail

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage(''); // Clear previous errors

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        emailjs.sendForm(
            'service_seyyblu',
            'template_fg0vcli',
            form.current,
            'NE0NCxeZRf-S1_AiI'
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    e.target.reset();
                }, 3000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={onClose}>
                            <FaTimes />
                        </button>

                        <h2>Connect with Team ASTRA</h2>
                        <p>Have questions or want to collaborate? Drop us a message!</p>

                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="user_name">Name</label>
                                <input type="text" name="user_name" id="user_name" required placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input type="email" name="user_email" id="user_email" required placeholder="your.email@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" required placeholder="How can we help?"></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                            {status === 'error' && <p className="error-msg">Failed: {errorMessage}</p>}
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
