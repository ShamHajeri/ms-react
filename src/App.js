
import './App.css';
import {HomePages} from './componetes/pages/homePage/homePage';
import { Route,Routes } from 'react-router-dom';
import EventPage from './componetes/pages/eventPage/eventPage';
import ContactUs from './componetes/pages/contactUs/contactUs';
import Search from './componetes/search/search';
import Description from './componetes/pages/description/description';



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Search/>}/>
      <Route path='/home' element={<HomePages/>}/>
      <Route path='/event' element={<EventPage/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/dis' element={<Description/>}/>
    </Routes>
   
    </>
  );
}

export default App;
