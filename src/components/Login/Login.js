import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import img from '../../img/istockphoto.png'
import logo from '../../img/ultimate hrm logo-05-02 2.png'
import { DayPicker } from 'react-day-picker';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const DatePicker = new Date();
    const date = `${DatePicker.getDate()}/${DatePicker.getMonth() + 1
        }/${DatePicker.getFullYear()}`;
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)


                const useAtd = {
                    email: email,
                    password: password,
                    date: date
                }

                userAttendance(useAtd)
                alert('Successfully login')
                form.reset()

            })
            .catch(error => {

                console.error(error)
            })

    }

    const userAttendance = (useAtd) => {
        console.log(useAtd)
        fetch('http://localhost:5000/useratd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(useAtd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (
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
                                    Log in Form
                                </h3>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-1 sm:mb-2">
                                        <input
                                            placeholder="Write Email Address"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-4 sm:mb-2">
                                        <input
                                            placeholder="Write Password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                        <p className='text-gray-400'>Your password must be 8 character</p>
                                    </div>
                                    <div className="mt-12 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className=" bg-sky-500 text-white mx-36 h-8 px-4  lg:mx  font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-xs mt-12  text-gray-600 sm:text-sm">
                                        Don't have an account? <Link to='/components' className='underline text-sky-500'>SIGNUP HERE!</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;