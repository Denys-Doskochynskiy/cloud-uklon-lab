import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// const data =  API.post('uklonapi', '/uklon', { 
//   body: { 
//     user_name: 'Denys aboba', 
//     car_model: '2003', 
//     car_number: 'https://www.youtube.com/watch?v=LOZuxwVk7TU' ,
//     last_order_complete:'scdsvsd',
//     is_active:true
//   } 
// })

// console.log(data)


// updateAPIData();

// const data = API.get('uklonapi', '/uklon')
// console.log(data)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
