import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from "./page/Test";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Test />} />
    <Route path="blogs" element={<Test />} />
    <Route path="contact" element={<Test />} />
  </Route>
</Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
