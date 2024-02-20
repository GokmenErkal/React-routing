import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//pages
import Home from './pages/Dashboard/Home';
import Users from './pages/Dashboard/Users';
import Contact from './pages/Dashboard/Contact';
import UserDetails from './pages/Dashboard/UserDetails';
import Login from './pages/Auth/Login';
import DashboardLayout from './layouts/Dashboard';
import AuthLayout from './layouts/Auth';
import Register from './pages/Auth/Register';
import Error404 from './pages/Dashboard/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UserDetails />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='register' index element={<Register />} />
        </Route>
        <Route path='*' element={<Error404/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
