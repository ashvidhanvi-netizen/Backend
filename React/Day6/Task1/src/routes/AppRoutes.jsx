import {Route,Routes}from "react-router-dom";

import StudentProfile from "../pages/StudentProfile"

const AppRoutes = ()=> {
  return (
    <>
     <Routes>
        <Route path = "/" element={<StudentProfile/>}/>
     </Routes>
    </>
  )
}
export default AppRoutes;