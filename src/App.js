// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'//imrs for impoting react and useState
// import About from './componets/About';
import Navbar from './componets/Navbar';
import Textform from './componets/Textform';
import Alert from './componets/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [textMode, setTextMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "rgb(4, 15, 42)";
      document.body.style.color = "yellow";
      setTextMode('light')
      showAlert("Dark mode has been enabled", "success")

      // setInterval(() => {
      //   document.title="TextUtils-DarkMode"
      // }, 4000);
      // setInterval(() => {
      //   document.title="Intall a virus"
      // }, 1500);
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTextMode('dark')
      showAlert("Light mode has been enabled", "success")


    }


  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" home="Home" mode={mode} toggleMode={toggleMode} textMode={textMode} />
        <Alert alert={alert} />


        <div className="container">
        {/* <Switch> */}
          {/* <Route exact path="/About"> */}
            {/* <About mode={mode} /> */}
          {/* </Route> */}
          
          {/* <Route exact path="/Textform"> */}
          <Textform showAlert={showAlert} heading="Enter your text here " mode={mode} />
          {/* </Route>
        </Switch> */}

          
          
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
