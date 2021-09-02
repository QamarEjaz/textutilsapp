import React,{useState} from "react";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
function App() {
  const[mode,setmode]=useState('light')
  const[alert,setAlert]=useState(null)
  const DarkMode=()=>{
    if(mode==="dark"){
      setmode('light')
      Alertshow('Light mode is successfully! enabled',"success")
    }
    else{
      setmode("dark")
      Alertshow('Dark mode is successfully! enabled',"success")
    }

  }
  
    const Alertshow=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null)
      }, 1500);   
    }
  return (
    <>
       
    
      
          <Navbar titale="TextUtils" mode={mode} EnableDarkMode={DarkMode}/>
      <Alert  alert={alert}  />
      <div className='container my-5' >
    <TextForm Alertshow={Alertshow}  heading="Enter The Text To Analyze"/>
      </div>
     
      
    </>
  );
}

export default App;
