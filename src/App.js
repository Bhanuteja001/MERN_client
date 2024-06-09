
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Routing from "./Routing";
import { useLocation } from "react-router-dom";
import Alert from "./Alert/Alert";
import { useContext, useState } from "react";
import context from "./Context/context";



function App() {
  
  
  const loc = useLocation()
  const loginpage = loc.pathname==="/login"

 



  const [alert,setalert] = useState(null)


  const showAlert = (type , message)=>{
    setalert({type , message})
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>

    <context.Provider value={{showAlert}}>

      
      {!loginpage && <Header />}
<Alert alert={alert}/>
      <Routing />
     {!loginpage && <Footer />}
    </context.Provider>
    </>
  );
}

export default App;
