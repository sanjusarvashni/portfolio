import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./NavBar"
import HomePage from "./HomePage"
import About from "./About"
import Skills from "./Skills"
import ContactPage from "./ContactPage"
import Projects from "./Projects"


const App = () => {
  return (
    <div  >
         <Navbar />
         <HomePage/>
         <About/>
         {/* <Skills/>
         <Projects/>
         <ContactPage /> */}
         
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)
export default App




