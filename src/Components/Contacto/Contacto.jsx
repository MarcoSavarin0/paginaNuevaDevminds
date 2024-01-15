/* eslint-disable no-unused-vars */
import React from 'react';
import { Form } from './Form/Form';

export const Contacto = () => {
  return (
    <div id="contact">
      <div className="container3">
        <div className="row2">
          <div className="contactLeft">
            <h1 className="subTitle3">Contact Us</h1>
            <p>
              <i className="fas fa-paper-plane huevoTrolo"></i>
              <a href="mailto:devmindsbusiness@gmail.com" className="huevoPuto">
                devmindsbusiness@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i>+54 3424877933
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>Santa Fe, Argentina
            </p>
            <div className="socialIcons">
              <a href="https://www.instagram.com/devminds_/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/devminds_" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/company/devminds8" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="contactRight">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
