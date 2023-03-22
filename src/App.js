import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/AboutPage/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomePage/Home';
// import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog'

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/blog' element={<Blog/>}/>   
        <Route path='*' element={<ErrorPage/>}/>
          
      </Routes>
   </BrowserRouter>
  );
}

export default App;
