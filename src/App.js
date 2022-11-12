
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/AboutMe/About';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
