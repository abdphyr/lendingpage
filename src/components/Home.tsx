import { FC } from 'react';
import '../styles/home.scss';
import call from '../images/call.svg';
import headerLogo from '../images/headerLogo.svg';
import background from '../images/background.png';
import arrow from '../images/arrow.svg';
import player from '../images/player.svg';
import play from '../images/play.svg';
import homePat from '../images/homePat.png';

const Home: FC = () => {
    return (
        <div className='homeWrapper'>
            <div id='home' className='homeSection'>
                <div className='background'>
                    <img src={background} alt="backgroundImage" />
                </div>
                <div className="wrapper">
                    <div className="header">
                        <div className="headerLogo">
                            <img src={headerLogo} alt="headerLogo" />
                        </div>
                        <div className="headerItems">
                            <a href='#products'>Products</a>
                            <a href='#about'>About us</a>
                            <a href='#blog'>Blog</a>
                            <a href='#contact'>Contact</a>
                        </div>
                        <div className="headerPhone">
                            <span>
                                <img src={call} alt="callImage" />
                            </span>
                            <div>
                                <div>95-004-80-90</div>
                                <div>94-641-40-00</div>
                            </div>
                        </div>
                    </div>
                    <div className='homeInfo'>
                        <div className="info">
                            <div className="title">
                                ВСЕ ДЛЯ ТЕПЛИЦ
                            </div>
                            <div className="description">
                                Here will be brief information about our company and some of
                                advantages of our offers. Here will be brief information
                                about our company.
                            </div>
                            <button>
                                <span>
                                    EXPLORE
                                </span>
                                <img src={arrow} alt="arrowImage" />
                            </button>
                        </div>
                        <div className="shapes">
                            <div className="mainShape">
                                <div className="secondary">
                                    <img src={player} alt="img" />
                                    <div>
                                        <img src={play} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pattern'>
                <img src={homePat} alt="image" />
                <img src={homePat} alt="image" />
                <img src={homePat} alt="image" />
                <img src={homePat} alt="image" />
                <img src={homePat} alt="image" />
                <img src={homePat} alt="image" />
            </div>
        </div>
    );
};

export default Home;