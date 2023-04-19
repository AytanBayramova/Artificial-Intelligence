import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Introduction from './components/Introduction';
import Partnyorlar from './components/Partnyorlar';
import Navbar  from './components/Navbar';
import LearnMore from './components/LearnMore';

function App() {

  return (
    <>
   
    <Navbar/>
    <Introduction/>
    <Partnyorlar/>
    <LearnMore/>
    </>
  );  
}

export default App;
