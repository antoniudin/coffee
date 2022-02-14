import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navigation.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FAQ from './pages/FAQ';
import MAIN from './pages/MAIN';

ReactDOM.render(
  <React.StrictMode>
     <MAIN/>
     <Router>
          <Route exact path="/"/>
          <Route path="/FAQ" to={<FAQ/>}/>
          <Route path="/dashboard"/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
