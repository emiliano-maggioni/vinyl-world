import { Route, Routes } from 'react-router-dom';
import HomePage from "pages/homepage/HomePage";
import Detailspage from "pages/detailspage/DetailsPage";
import CartPage from "pages/cartpage/CartPage";
import LoginPage from 'pages/loginpage/LoginPage';

const Routing = () => {
  return (
      <Routes>
        <Route key="/" path="/" element={<HomePage />} />
        <Route key="/cart" path="/cart" element={<CartPage />} />
        {["/login", "/complete-checkout"].map(path => <Route key={path} path={path} element={<LoginPage />} />)}
        <Route key="/album/:id" path="/album/:id" element={<Detailspage />} />
      </Routes>
  );
}

export default Routing;
