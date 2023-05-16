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
import Region from './components/Region';
import ReagionList from './components/ReagionList';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AddRegion } from './components/AddRegion';
import { AddPlace } from './components/AddPlace';
import { AddHotel } from './components/AddHotel';
import { AddOffbeatPlace } from './components/AddOffbeatPlace';
import { AddFood } from './components/AddFood';
import { AddRestaurant } from './components/AddRestaurant';
import { AdminSignup } from './components/AdminSignup';

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
              <Route path='/region' element={<Region />} />
              <Route path='/regionlist' element={<ReagionList />} />
              <Route path='/adminlogin' element={<AdminLogin />} />
              <Route path='/admindashboard' element={<AdminDashboard />} />
              <Route path='/addregion' element={<AddRegion />} />
              <Route path='/addplace' element={<AddPlace />} />
              <Route path='/addhotel' element={<AddHotel />} />
              <Route path='/addoffbeatplace' element={<AddOffbeatPlace />} />
              <Route path='/addfood' element={<AddFood />} />
              <Route path='/addrestaurant' element={<AddRestaurant />} />
              <Route path='/adminsignup' element={<AdminSignup />} />
            </Routes>
          </BrowserRouter>
        </div>
      </State>
    </MantineProvider>
  );
}

export default App;
