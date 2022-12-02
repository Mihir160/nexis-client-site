import React, { useContext } from 'react';
import img from '../../img/istockphoto.png'
import logo from '../../img/ultimate hrm logo-05-02 2.png'
import { FaArrowRight } from "react-icons/fa";
const NextstepFirst = ({ page, setPage, formData, setFormData }) => {
    // const handledata = (event) =>{
    //     event.preventDefault()
    //     // console.log(formData)
    // }
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
                                    SignUp From
                                </h3>
                                <form>
                                    <div className="mb-1 flex gap-2 sm:mb-2">
                                        <input type="" disabled placeholder='+880' className='flex-grow w-12 h-12 w- mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline' />
                                        <input
                                            placeholder="1xxxxxxxxxx"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="number"
                                            name="number"
                                            value={formData.number}
                                            onChange={(e) =>
                                              setFormData({ ...formData,number: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <input
                                            placeholder="Write Email Address"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 border-b-2  transition duration-200 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                              setFormData({ ...formData,email: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mt-12 mb-2 flex lg:justify-between justify-around  lg:mx-20 sm:mb-4">
                                        <button onClick={() => {
                                            setPage(page - 1);
                                        }}>Back</button>

                                        <button
                                            onClick={() => {
                                                setPage(page + 1);
                                            }}
                                            className='h-8 rounded-lg flex items-center text-white  px-4 bg-sky-600 '
                                        >
                                            Next Step
                                            <FaArrowRight className='mx-1'></FaArrowRight>
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextstepFirst;