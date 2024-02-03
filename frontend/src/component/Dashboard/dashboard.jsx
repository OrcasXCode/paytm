import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Dashboard(props) {

    const navigate=useNavigate();

    const [users,setUsers]=useState([]);
    const [filter,setFilter]=useState("");
    const token = localStorage.getItem('token');

    useEffect(()=>{
        axios.get("http://localhost:3000/user/bulk?filter="+filter)
        .then(res=>{
            setUsers(res.data.user)
            console.log(res);
        })
    },[filter]);
    

    return (
        <div>
            {/* navbar */}
             <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 bg-opacity-100 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className='flex items-center '>
                        <Link to='/dashboard' className='font-medium'>Payments App</Link>
                    </div>
                    <div className="flex items-center lg:order-2">
                        {!token ? (
                            <>
                                <Link
                                to="/signin"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                Log in
                                </Link>
                                <Link
                                to="/signup"
                                style={{ background: 'black' }}
                                className="text-white focus:ring-4 focus:ring-white font-medium rounded-[20px] text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                Get started
                                </Link>
                            </>
                            ) : (
                            <div className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                                Hello User !
                            </div>
                            )}
                    </div>
                </div>
            </nav>
            </header>

            {/* balance */}
            <div className='flex flex-col m-4 justify-between space-y-4'>
                <h1 className='flex font-bold text-3xl'>Your Balance $0</h1>
                <h1 className='flex font-bold text-3xl'>Users</h1>
                <input type='text' placeholder='Search Users....' className='border-2 p-2 rounded-md'
                onChange={(e)=>{
                    setFilter(e.target.value)
                }}></input>
            </div>

            {/* users */}
            <div className='space-y-7 justify-center items-center flex flex-col'>
                {users.map(user => (
                <div className='flex flex-row border-2 rounded-full w-[1400px] p-2 justify-between' key={user._id}>
                    <div className='flex  w-[400px] space-x-7 flex-row '>
                        <div className='rounded-full flex w-[40px] h-[40px] items-center justify-center bg-gray-200 text-black p-2'>{user.firstName[0].toUpperCase()}</div>
                        <div className='flex flex-row h-full font-semibold text-xl'>{user.firstName} {user.lastName}</div>
                    </div>
                    <div className='justify-center'>
                        <button className='inline-flex items-center rounded-full bg-black px-3.5 py-2.5 font-semibold text-white'
                            onClick={() => {
                                navigate("/send?id=" + user._id + "&name=" + user.firstName);
                            }}
                        >
                Send money
            </button>
        </div>
    </div>
))}
        
            </div>
        </div>
    )
}
