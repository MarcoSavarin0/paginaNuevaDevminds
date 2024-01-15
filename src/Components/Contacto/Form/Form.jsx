/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export const Form = () => {
    return (
        <>
            <form className="contact-form"  action="https://formspree.io/f/xyyqkqpv" method="POST">
                <input type="text" name="Name" placeholder="Your name" required/>
                    <input type="text" name="Email" placeholder="Your email" required/>
                        <textarea name="Message" rows="6" placeholder="Your message"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </>
                );
};