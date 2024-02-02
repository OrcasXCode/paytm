import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Dashboard(props) {
    

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
                        <Link
                            to="/signin"
                            className=" text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        
                        <Link
                            to="/signup"
                            style={{background:'black'}}
                            className="text-white focus:ring-4 focus:ring-white font-medium rounded-[20px]  text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    
                </div>
            </nav>
            </header>

            {/* balance */}
            <div className='flex flex-col w-[90%] justify-around'>
                <h1 className='flex font-bold text-3xl'>Your Balance 0</h1>
                <h1 className='flex font-bold text-3xl'>Users</h1>
                <input type='text' placeholder='Search Users....' className='border-2 p-2'></input>
            </div>
        </div>
    )
}
