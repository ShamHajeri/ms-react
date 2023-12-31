
import './App.css';
import {HomePages} from './componetes/pages/homePage/homePage';
import { Route,Routes } from 'react-router-dom';
import EventPage from './componetes/pages/eventPage/eventPage';
import ContactUs from './componetes/pages/contactUs/contactUs';
import Search from './componetes/search/search';
import Description from './componetes/pages/description/description';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateArticle } from './componetes/redux/articleSlice';
import { Api } from './componetes/dataService.ts';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate loading data on app load
    const fetchData = async () => {
      try {
        // Replace this with your actual data fetching logic
        const data = await Api.request('', 'GET', '');
        dispatch(updateArticle(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);



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
