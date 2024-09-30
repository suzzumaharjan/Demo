
import './App.css';
import '../src/Assests/Styles/main.min.css'

import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Story from './components/Story';
import Post from './components/Post';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
        <Navbar/>
        <Introduction/>
        <Story/>
        <Post/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default App;
