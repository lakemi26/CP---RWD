import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import CriarConta from './components/pages/CriarConta';
import PagClie from './components/pages/PagClie';
import AgendamentoFinal from './components/pages/AgendamentoFinal';
import Selfc from './components/pages/Self';
import Agendamento from './components/pages/Agendamento';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/CriarConta' component={CriarConta} />
          <Route path='/Selfc' component={Selfc} />
          <Route path='/PagClie' component={PagClie} />
          <Route path='/AgendamentoFinal' component={AgendamentoFinal}/>
          <Route path='/Agendamento' component={Agendamento}/>
          
        </Route>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

