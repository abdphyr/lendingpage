import { FC } from 'react';
import '../styles/footer.scss';
import logoWhite from '../images/logoWhite.svg';
import abbamedia from '../images/abbamedia.svg';
import abbacoding from '../images/abbacoding.svg';
import footerBack from '../images/footerBack.png';

const Footer: FC = () => {
    return (
        <div className='footer_section'>
            <div className="wrapper">
                <div className="footer">
                    <div className="left">
                        <div className="footer_logo">
                            <img src={logoWhite} alt="image" />
                        </div>
                        <div>Tashkent, Mustakillik St, 15</div>
                        <div>Tel: +998 99 000 00 00</div>
                        <div>E-mail: hello@alibaraka.com</div>
                    </div>
                    <div className="rigth">
                        <div className="footer_menu">
                            <div>About us</div>
                            <div>Products</div>
                            <div>Blog</div>
                        </div>
                        <div className="footer_menu_item">
                            <a>About us</a>
                            <a>Plyonka</a>
                            <a>10x</a>
                        </div>
                        <div className="footer_menu_item">
                            <a>Our team</a>
                            <a>Zajem</a>
                            <a>Gardening</a>
                        </div>
                        <div className="footer_menu_item">
                            <a>Frequent questions</a>
                            <a>Isitish va sovutish</a>
                            <a>Melon</a>
                        </div>
                        <div className="footer_menu_item">
                            <a>Contact us</a>
                            <a>Suv taqsimoti</a>
                            <a>Water dist</a>
                        </div>
                    </div>
                </div>
                <div className='line'></div>
                <div className="footer_info">
                    <div className="rights">
                        All rights reserved
                    </div>
                    <div className='development'>
                        <div className="title">
                            Разработано в
                        </div>
                        <img src={abbacoding} alt="image" />
                        <img src={abbamedia} alt="image" />
                    </div>
                </div>
            </div>
            <div className='footerBack'>
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
                <img src={footerBack} alt="image" />
            </div>
        </div>
    );
};

export default Footer;