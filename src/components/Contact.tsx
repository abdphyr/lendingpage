import { FC } from 'react';
import '../styles/contact.scss';
import contact from '../images/contact.png';

const Contact: FC = () => {
    return (
        <div id='contact' className='contact_section'>
            <div className='contact'>
                <div className="kvadrat"></div>
                <div className="circle"></div>
                <div className="contact_image">
                    <img src={contact} alt="contactImage" />
                </div>
                <div className='contact_body'>
                    <div className="title">
                        Still are you hesitating?
                    </div>
                    <div className="desc">
                        Your work is going to fill a large part
                        of your life, and the only way to be truly satisfied.
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='form_name_phone'>
                            <input type="text" placeholder='Enter your name' />
                            <input type="text" placeholder='Enter phone tel' />
                        </div>
                        <textarea style={{ resize: 'none' }} placeholder='Enter your subject'></textarea>
                        <button type='submit'>send message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;