import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BuyItems from '../pages/BuyItems';
import SellItems from '../pages/SellItems';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/buyitems" element={<BuyItems />} />
                <Route path="/sellitems" element={<SellItems />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
