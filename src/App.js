import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages:
import Home from './Pages/Home';
import Error from './Pages/Error';
import GuitarsPage from './Pages/GuitarsPage';
import BassesPage from './Pages/BassesPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';
import InstrumentsPage from './Pages/InstrumentsPage';
// Components:
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Context/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/instruments'>
            <InstrumentsPage></InstrumentsPage>
          </Route>
          <Route path='/guitars'>
            <GuitarsPage></GuitarsPage>
          </Route>
          <Route path='/basses'>
            <BassesPage></BassesPage>
          </Route>
          <Route path='/about'>
            <AboutPage></AboutPage>
          </Route>
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='/login'>
            <LoginPage></LoginPage>
          </Route>
          <Route path='/cart'>
            <CartPage></CartPage>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </ScrollToTop>
    </Router>
  );
}

export default App;
