import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';
import NextstepFirst from './NextstepFirst';
import NextStepTwo from './NextStepTwo';
import Signup from './Signup';

const SignupComponents = () => {
    const [page, setPage] = useState(0);
    const {creatUser} = useContext(AuthContext)

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        number:"",
        email:"",
        password:""
      });


   
     
    
    const componentList = [
             <Signup page={page}
             setPage={setPage} formData={formData}
             setFormData={setFormData}></Signup>,

            <NextstepFirst page={page}
            setPage={setPage} formData={formData}
            setFormData={setFormData}></NextstepFirst>,

            <NextStepTwo page={page}
            setPage={setPage} formData={formData}
            setFormData={setFormData}></NextStepTwo>
    ]
    return (
        <div >
            {componentList[page]}
          
            
        </div>
    );
};

export default SignupComponents;