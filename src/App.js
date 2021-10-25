import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Secret from './components/Secret/Secret';
import SecretNew from './components/Secret/SecretNew';
import { useEffect } from 'react';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { API } from 'aws-amplify'
import SecretEdit from './components/Secret/SecretEdit';

// const updateAPIData = () => {
// API.put('uklonapi', `/uklon/c758ce68-4e86-4ec1-8fae-ef03afb9dd3e`, {
//       body: {
//         user_name: "Dotem",
//           car_model: "empty",
//           car_number: "empty",
//           last_order_complete: "empty",
//           is_active: false
//       }
//   })
// }


// const deleteUklonAPI= async ()=>{
//   const del= await API.del('uklonapi', `/uklon/8d9d69ee-653f-45cc-b58c-2e0c47a96f62`)
 
// }

  // UPDATE
  // useEffect(()=>{const updateUklon=async()=>{
  //   console.log(updateAPIData())
  // }
  // updateUklon()})


  // DELETE
  // useEffect(()=>{const deleteUklon=async()=>{
  //   console.log(deleteUklonAPI())
  // }
  // deleteUklon()})
function App() {



  return (
    <Router>
        <Route exact path='/' component={Secret} />
        <Route exact path='/secret-new' component={SecretNew} />
        <Route exact path='/secret-edit' component={SecretEdit} />
  </Router>
     );
}

export default App;
