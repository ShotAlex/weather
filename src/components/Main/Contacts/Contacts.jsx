import React from 'react';
import './Contacts.scss';
import GoogleMap from './GoogleMap';
import ContactForm from './ContactForm';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__map">
                <div id="map">
                    <GoogleMap/>
                </div>
            </div>

            <div className="contacts__form">
                <ContactForm/>
            </div>
        </section>
    );
};

export default Contacts;