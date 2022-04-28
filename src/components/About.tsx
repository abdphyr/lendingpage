import { FC } from 'react';
import '../styles/about.scss';
import traktor from '../images/traktor.png';
import tomato from '../images/tomato.png';
import greenhouse from '../images/greenhouse.png';
import pat from '../images/homePat.png';
import microsoft from '../images/microsoft.png';
import google from '../images/google.png';
import slack from '../images/slack.png';
import wordpress from '../images/wordpress.png';
import next from '../images/next.png';

const About: FC = () => {
    return (
        <div id='about'>
            <div className='wrapper'>
                <div className="about">
                    <div className="about_info">
                        <div className="title">
                            little ABout our company
                        </div>
                        <div className="description">
                            "Your work is going to fill a large part of your life,
                            and the only way to be truly satisfied is to do what you
                            believe is great work. And the only way to do great work
                            is to love what you do."
                        </div>
                        <div className="buttons">
                            <button className='more'>
                                MORE ABOUT
                            </button>
                            <button className="youtube">
                                OUR YOUTUBE
                            </button>
                        </div>
                    </div>
                    <div className="about_images">
                        <div className="traktor">
                            <img src={traktor} alt="traktor" />
                        </div>
                        <div className="tomato">
                            <img src={tomato} alt="tomato" />
                        </div>
                        <div className="greenhouse">
                            <img src={greenhouse} alt="greenhouse" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="companies">
                <div className="back_image">
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                    <img src={pat} alt="image" />
                </div>
                <div className="wrapper">
                    <div className="main">
                        <div className="title">
                            Trusted by 
                        </div>
                        <div className="coms">
                            <div className="com">
                                <img src={microsoft} alt="image" />
                            </div>
                            <div className="com">
                                <img src={google} alt="image" />
                            </div>
                            <div className="com">
                                <img src={slack} alt="image" />
                            </div>
                            <div className="com">
                                <img src={wordpress} alt="image" />
                            </div>
                        </div>
                        <div className="next">
                            <img src={next} alt="nextIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;