import { FC } from 'react';
import '../styles/blog.scss';
import plus from '../images/plus.svg';
import flag from '../images/flag.png';
import storyImage from '../images/storyImage.png';

const Blog: FC = () => {
    return (
        <div id='blog' className='blog'>
            <div className="see">
                <div className='left'>
                    <img src={flag} alt="image" />
                </div>
                <div className="right">
                    <div>
                        <div className="title">
                            See why we are trusted the world over
                        </div>
                        <div className="description">
                            The first rule of any technology used in a business is that automation
                            applied to an efficient operation will magnify the efficiency.
                        </div>
                        <div className="blog_table">
                            <div className='tbody'>
                                <div className="td">
                                    <div className="title">
                                        Do you provide customer support?
                                    </div>
                                    <img src={plus} alt="image" />
                                </div>
                                <div className="td">
                                    <div className="title">
                                        How much traffic can the hosting handle?
                                    </div>
                                    <img src={plus} alt="image" />
                                </div>
                                <div className="td">
                                    <div className="title">
                                        Do you have any questions for us?
                                    </div>
                                    <img src={plus} alt="image" />
                                </div>
                                <div className="td">
                                    <div className="title">
                                        What is your return policy?
                                    </div>
                                    <img src={plus} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <div className="stories">
                    <div className="left">
                        <div className="title">
                            How our client made 10x revenue
                        </div>
                        <div className="image">
                            <img src={storyImage} alt="image " />
                            <div className="info">
                                <div>
                                    <div className="tit">
                                        "I learned so much, even as a professional".
                                    </div>
                                    <div className="des">
                                        "Ut vehicula lacus a lacus tempor, nec viverra
                                        justo condimentum. Integer eu urna dapibus,
                                        scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
                                    </div>
                                    <div className="name">
                                        Juan Huang
                                    </div>
                                </div>
                            </div>
                            <div className="more_stories">
                                <button>
                                    more stories
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <div className="title">
                                Other successful stories
                            </div>
                            <div className="story">
                                <div className="name">
                                    Amateur
                                </div>
                                <div className="info">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, labore.
                                </div>
                                <a href="#" className="more_info">
                                    More information
                                </a>
                            </div>
                            <div className="story">
                                <div className="name">
                                    Beginner
                                </div>
                                <div className="info">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, labore.
                                </div>
                                <a href="#" className="more_info">
                                    More information
                                </a>
                            </div>
                            <div className="story">
                                <div className="name">
                                    Professional
                                </div>
                                <div className="info">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, labore.
                                </div>
                                <a href="#" className="more_info">
                                    More information
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;