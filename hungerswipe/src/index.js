import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Privacy from './Privacy';
import { BrowserRouter as Router, Route, Link,  Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <Route exact path = "/" component = {App}/>
     <Route path = "/privacy" component = {Privacy} />
     {/* <Route path = "about" component = {About} />
     <Route path = "contact" component = {Contact} /> */}
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
