import './App.css';
// import About from './MyComponents/About';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm"
import React, { useState } from 'react'
import Alert from './MyComponents/Alert'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert =(message , type) =>{
setAlert({
  msg: message,
  type: type
})
setTimeout(() => {
  setAlert(null);
}, 3000);
}

  const toggleMode =()=>{
    if(mode === 'dark'){
    setMode ('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been unabled",  "Success");
    // document.title=("Dark Mode")
    // setInterval(() => {
    //   document.title= "Text utils is amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title= "install Text utils now";
    // }, 1500);
    }
    else{
      setMode ('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been unabled", "Success")
      // document.title=("light Mode")

    }
  }
  return ( 
    <>
    {/* // <Router> */}
    {/* <Navbar title="TextUtils" aboutText= "About us"  /> */}
  <Navbar title='TextUtils' aboutText= "About us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
          {/* <Route path="/about" element={ <About /> }></Route> */}
         
          {/* <Route path="/" element={}> </Route> */}
          <TextForm showAlert={showAlert} mode={mode} heading="Enter your heading" />
            {/* </Routes> */}
            </div>
            {/* </Router>   */}
            </>
            );
}

export default App;
