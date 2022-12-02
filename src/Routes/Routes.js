import { createBrowserRouter } from "react-router-dom";
import Attendance from "../components/Attendance/Attendance";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignupComponents from "../components/Signup/SignupComponents";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
   
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
        path:'/components',
        element:<SignupComponents></SignupComponents>
    },
    {
        path:'/attendance',
        element:<Attendance></Attendance>
    }
 

])

export default router