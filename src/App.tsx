import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import Profile from "./pages/profile";
import Setting from "./pages/setting";
import History from "./pages/history";
import Cart from "./pages/cart";
import BuyNow from "./pages/buybow";
import Selling from "./pages/selling";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Contact from "./pages/contact";
import Mail from "./pages/mail";
import NotoficationPage from "./pages/notofication";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      <Route path="/setting" element={<Setting/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/history" element={<History/>}></Route>
      <Route path="/buy" element={<BuyNow/>}></Route>
      <Route path="/Selling" element={<Selling/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/Mail" element={<Mail/>}></Route>
      <Route path="/notif" element={<NotoficationPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
