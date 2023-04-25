import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import State from './context/State';
import { Signup } from './components/Signup';
import { MantineProvider } from '@mantine/core';
import { Login } from './components/Login';
import HotelList from './components/HotelList';
import OffBPlaceList from './components/OffBPlaceList';
import FoodList from './components/FoodList';
import Hotel from './components/Hotel';
import OffBPlace from './components/OffBPlace';
import RestaurantList from './components/RestaurantList';
import Restaurant from './components/Restaurant';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <State>
        <div className='App'>
          <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/hotellist' element={<HotelList />} />
              <Route path='/offbeatplacelist' element={<OffBPlaceList />} />
              <Route path='/foodlist' element={<FoodList />} />
              <Route path='/hotel' element={<Hotel />} />
              <Route path='/offbeatplace' element={<OffBPlace />} />
              <Route path='/restaurantlist' element={<RestaurantList />} />
              <Route path='/restaurant' element={<Restaurant />} />
              <Route path='/activitylist' element={<ActivityList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </State>
    </MantineProvider>
  );
}

export default App;
