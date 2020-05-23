import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';


// const Header = () => {
//     // const scr = "<script>alert('Error!')</script>"
//     return <h2 > Hello, world!</h2>
// }
// const Field = () => {
//     const holder = 'Enter here'
//     const styleField ={
//         width: '300px'
// }
//     return <input type = 'Text'
//                  placeholder = {holder}
//                  autoComplite = ""
//                  style = {styleField}/>
// }
// const Button = () => {
//     const text = 'Log in'; 
//     const logged = true;
//     // const res = () =>{
//     //     return 'Log in, please'
//     // }
//  return <button>{logged ? 'Enter' : text}</button>
// }

// const App = () => {
//     return ( <div>
//         <Header />
//         <Field />
//         <Button />
//         </div>
//     )
// }

ReactDOM.render( <App /> , document.getElementById('root'));