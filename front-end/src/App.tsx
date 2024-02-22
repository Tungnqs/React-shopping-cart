import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'; // Import Routes
import Header from './components/Header/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
import CartItemsComponent from './components/CheckoutPage/CartItemsComponent/CartItemsComponent';
import { Provider } from 'react-redux';
import store from './store';
import ComingSoon from './components/HomepageAndReviewComponent/ComingSoon';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/cart" element={<CartItemsComponent />} />
          <Route path="/products" element={<Container />} />
          <Route path="/home" element={<ComingSoon />} />
          <Route path="/review" element={<ComingSoon />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
