import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';
import img from '../../img/istockphoto.png'
import logo from '../../img/ultimate hrm logo-05-02 2.png'
const NextStepTwo = ({ page, setPage, formData,setFormData }) => {
    const {creatUser} = useContext(AuthContext)
    const DatePicker = new Date();
    const date = `${DatePicker.getDate()}/${DatePicker.getMonth() + 1
        }/${DatePicker.getFullYear()}`;
    const handledata = (event) =>{

        event.preventDefault()
        creatUser(formData.email, formData.password)
        .then(result => {
            const user = result.user;
            const data = {
                email : formData.email,
                firstName : formData.firstName,
                lastName : formData.lastName,
                number : formData.number,
                password : formData.password,
                date : date,
                status: false


            }
            addUser(data)
            console.log(data)
            
        })
        .catch(error => {
            console.log(error)
           
        });
    }

    const addUser = (data) =>{
        fetch('http://localhost:5000/usersadd',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <div className="overflow-hidden ">
                <div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                            <img src={logo} alt="" srcset="" />
                            <img src={img} alt="" srcset="" />
                        </div>
                        <div className="w-full max-w-xl  xl:px-8 xl:w-5/12 lg:h-full">
                            <div className="relative">
                                <div className="relative bg-white shadow-md rounded border p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        SignUp From
                                    </h3>
                                    <form onSubmit={handledata}>
                                        <div className="mb-4 sm:mb-2">
                                            <input
                                                placeholder="Write Password"
                                                required
                                                type="password"
                                                className="flex-grow w-full h-12 px-4 mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, password: e.target.value })
                                                }
                                            />
                                            <p className='text-gray-400'>Your password must be 8 character</p>
                                        </div>

                                        <div className="mt-12 mb-2 flex lg:justify-between justify-around  lg:mx-20 sm:mb-4">
                                            <button onClick={() => {
                                                setPage(page - 1);
                                            }}>Back</button>
                                            <button
                                                onClick={() => {
                                                    alert("You've successfully submitted this form");
                                                    
                                                }}
                                                
                                                className='h-8 rounded-lg flex items-center text-white  px-4 bg-sky-600 '
                                            >
                                                Sign Up

                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextStepTwo;