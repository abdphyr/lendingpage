import { FC } from 'react';
import './main.scss';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import Production from './components/Products';
import Blog from './components/Blog';
import imageTree from './images/imageTree.png';

const App: FC = () => {
  return (
    <>
      <Home />
      <div className="app">
        <div className="tree">
          <div className="imageTree">
            <img src={imageTree} alt="imageTree" />
          </div>
          <Production />
          <About />
        </div>
        <Blog />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
