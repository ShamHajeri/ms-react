
import './App.css';
import {HomePages} from './componetes/pages/homePage/homePage';
import { Route,Routes } from 'react-router-dom';
import EventPage from './componetes/pages/eventPage/eventPage';
import ContactUs from './componetes/pages/contactUs/contactUs';
import Search from './componetes/search/search';
import Description from './componetes/pages/description/description';
import ReviewPage from './componetes/pages/description/reviewPage';
import Earth from './componetes/solarSysytem/Earth';



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Earth/>}/>
      <Route path='/home' element={<HomePages/>}/>
      <Route path='/event' element={<EventPage/>}/>
      <Route path='/about' element={<ContactUs/>}/>
      <Route path='/dis' element={<Description/>}/>
      <Route path='/Review' element={<ReviewPage/>}/>
    </Routes>
   
    </>
  );
}

export default App;
