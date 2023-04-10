import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import './App.css';

import Navbar  from './components/Navbar';
import { BrowserRouter, Routes, Route, Form} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound404 from './pages/NotFound404';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);

    },2000);
  }, []); 

  return (
    <>
    {loading ? (
      <div className='center'>
      <div className='ring'></div>
        <span>Loading...</span>
     </div> 
    ):(
      <BrowserRouter>
    <Navbar/>

    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='*' element ={<NotFound404/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/xidmetlerimiz' element={<Services/>}/>
    <Route path='/blogg' element={<Blog/>}/>
    <Route path='/elaqe' element={<Contact/>}/>


    </Routes> 

    

    <Footer/>
    </BrowserRouter>
    )}
    

   
   
    </>
  );

  
}

export default App;
    

