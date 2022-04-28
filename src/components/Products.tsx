import { FC } from 'react';
import '../styles/products.scss';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';

const Products: FC = () => {
    return (
        <div id='products' className='productsSection'>
            <div className="wrapper">
                <div className="products">
                    <div className="pr_info">
                        <div className="pr_title">
                            our production
                        </div>
                        <div className="pr_description">
                            "Your work is going to fill a large part of your life,
                            and the only way to be truly satisfied is to do what you believe is great work]
                        </div>
                    </div>
                    <div className="pr_items">
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image1} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image2} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image3} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image4} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image5} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pr_item">
                            <div>
                                <div className="image">
                                    <img src={image6} alt="image" />
                                </div>
                                <div className="desc">
                                    <div className="title">
                                        Asosiy Plyonka Turlari
                                    </div>
                                    <div className="body">
                                        Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;