import React from 'react';

const ContactForm = () => {
    return (
        // <form action="" method="POST">
        //     <input type="text" name="name" placeholder="Name"/>
        //     <input type="text" name="mail" placeholder="E-mail"/>
        //     <textarea placeholder="Write me" rows="6"></textarea>
        //     <button>SUBMIT</button>
        // </form>

        <div className="contactsData">
            <div className="contactsData-tel">
                <img src="https://img.icons8.com/dotty/80/000000/phone.png" alt="phone"/>
                <a href="tel:+375291224029">+375 (29) 122-40-20</a>
            </div>
            <div className="contactsData-mail">
                <img src="https://img.icons8.com/ios/50/000000/new-post.png" alt="mail"/>
                <a href="mailto:shot.ales@gmail.com">shot.aleks@gmail.com</a>
            </div>
        </div>
    );
};

export default ContactForm;
