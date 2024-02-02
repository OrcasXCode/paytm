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
            <div className='flex flex-col m-4 justify-between space-y-4'>
                <h1 className='flex font-bold text-3xl'>Your Balance $0</h1>
                <h1 className='flex font-bold text-3xl'>Users</h1>
                <input type='text' placeholder='Search Users....' className='border-2 p-2 rounded-md'></input>
            </div>

            {/* users */}
            <div className='space-y-7'>
                <div className='flex flex-row justify-between'>
                    <div className='flex w-[200px] space-x-7 flex-row justify-center items-center'>
                        <div className='rounded-full  bg-gray-200 text-black p-2'>U1</div>
                        <h2 className='flex font-semibold text-xl'>Users 1</h2>
                    </div>
                    <div className='justify-center'>
                        <Link to="/send"><button className='inline-flex items-center  rounded-md bg-black px-3.5 py-2.5 font-semibold  text-white'>
                        Send money</button></Link>
                    </div>
                </div>  
                <div className='flex flex-row justify-between'>
                    <div className='flex w-[200px] flex-row space-x-7  justify-center items-center'>
                        <div className='rounded-full bg-gray-200 text-black p-2'>U2</div>
                        <h2 className='flex font-semibold text-xl'>Users 2</h2>
                    </div>
                    <button className='inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold  text-white'>Send money</button>
                </div>  
                <div className='flex flex-row justify-between'>
                    <div className='flex w-[200px] flex-row space-x-7  justify-center items-center'>
                        <div className='rounded-full bg-gray-200 text-black p-2'>U3</div>
                        <h2 className='flex font-semibold text-xl'>Users 3</h2>
                    </div>
                    <button className='inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold  text-white'>Send money</button>
                </div>  
                <div className='flex flex-row justify-between'>
                    <div className='flex w-[200px] flex-row space-x-7  justify-center items-center'>
                        <div className='rounded-full bg-gray-200 text-black p-2'>U4</div>
                        <h2 className='flex font-semibold text-xl'>Users 4</h2>
                    </div>
                    <button className='inline-flex items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold  text-white'>Send money</button>
                </div>  
            </div>
            
        </div>
    )
}
