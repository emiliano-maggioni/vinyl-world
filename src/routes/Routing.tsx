import { Route, Routes } from 'react-router-dom';
import HomePage from "pages/homepage/HomePage";
import Detailspage from "pages/detailspage/DetailsPage";
import CartPage from "pages/cartpage/CartPage";
import LoginPage from 'pages/loginpage/LoginPage';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/album/:id" element={<Detailspage />} />
      </Routes>
  );
}

export default Routing;
