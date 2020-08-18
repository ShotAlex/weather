import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-inner'>
                <div className="footer-inner__logo">
                    <img src={process.env.PUBLIC_URL + '/images/Logo.png'}/>
                    <span>
                        Front-end developer on React
                    </span>
                </div>

          {/* <a href="https://example.com" target="_blank" rel="noreferrer noopener" /> */}


                <div className="footer-inner__links">
                    <a href="https://t.me/AlexandrShot">
                        <img src={process.env.PUBLIC_URL + '/images/telegram.png'}/>
                    </a>
                    <a href="https://www.linkedin.com/in/shotalex/">
                        <img src={process.env.PUBLIC_URL + '/images/linkedin.png'}/>
                    </a>
                    <a href="https://github.com/ShotAlex">
                        <img src={process.env.PUBLIC_URL + '/images/git.png'}/>
                    </a>
                    <a href="https://www.instagram.com/shot.aleksandr/">
                        <img src={process.env.PUBLIC_URL + '/images/instagram.png'}/>
                    </a>
                </div>
            </div>
            <div className='footer__copy'>
                © Copyright
            </div>
        </footer>
    );
};

export default Footer;