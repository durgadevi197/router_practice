import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App(){
  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes> 
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes> 
    </div>
    </Router>
  );
}

export default App;
