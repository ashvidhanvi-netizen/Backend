import { Route,Routes } from "react-router-dom";

const AppRoutes =()={

    return (
       <>
       <Routes>
       
       <Route path="/" element={<Home/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/Service" element={<Service/>} />
       <Route path="/Contact" element={<Contact/>}/>
       
       
       </Routes>
       </>
    )
}