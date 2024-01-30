
import './App.css';
import {HomePages} from './componetes/pages/homePage/homePage';
import { Route,Routes } from 'react-router-dom';
import EventPage from './componetes/pages/eventPage/eventPage';
import ContactUs from './componetes/pages/contactUs/contactUs';
import Description from './componetes/pages/description/description';
import ReviewPage from './componetes/pages/description/reviewPage';
import ETB from './componetes/planet/planet';


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<ETB etb="earth"/>}/>
      <Route path='/home' element={<HomePages/>}/>
      <Route path='/planet' element={<EventPage/>}/>
      <Route path='/about' element={<ContactUs/>}/>
      <Route path='/dis' element={<Description/>}/>
      <Route path='/Review' element={<ReviewPage/>}/>
    </Routes>
   
    </>
  );
}

export default App;
