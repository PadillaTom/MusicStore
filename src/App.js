import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages:
import Home from './Pages/Home';
import Error from './Pages/Error';
// Components:
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
