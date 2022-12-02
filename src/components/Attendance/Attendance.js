import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import img from '../../img/ultimate hrm logo-05-02 2.png'
import { AuthContext } from '../../Contexts/Authprovider';
const Attendance = () => {
    const {loading} = useContext(AuthContext)
    const { data: attendance = [], refetch } = useQuery({
        queryKey: ['attendance'],
        queryFn: async () => {
            const res = await fetch('https://nexis-server-site.vercel.app/attendance', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
            
        }
    })
    if(loading){
        refetch()
    }
 
    return (
        <div>
            <div className='mt-2'>
                <img src={img} alt="" srcset="" />
            </div>
            <div className='text-center'>
                <button className="text-3xl bg-sky-500 mt-8 text-white rounded-lg p-2 mb-5">Attendance information</button>
                <div className="overflow-x-auto">
                    <table className="table mt-4 text-center w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendance &&
                                attendance?.map((atd) => <tr key={atd._id}>
                                    <td>{atd.date}</td>
                                    <td>{atd.firstName} {atd.lastName}</td>
                                    <td>{

                                        atd?.status === true && <p>Present</p>


                                    }
                                        {
                                            atd?.status === false && <p>Absent</p>
                                        }
                                    </td>


                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance;