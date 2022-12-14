import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Dashboard,Login,Blog,About,Protected} from './components';
import reportWebVitals from './reportWebVitals';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {createStore,compose,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/blog" 
              element={
                <Protected>
                  <Blog />
                </Protected>
              }
          />
          <Route path="/login" element={<Login />}/>
          <Route path="/about" 
            element={
                <About/>
            }
          />
        </Routes>   
      </Provider>
      
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
