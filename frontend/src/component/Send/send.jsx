import React from 'react'

export function Send(props) {
    

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col w-[400px] h-[400px] space-y-4 border-2 p-4 justify-center items-center'>
                <h1 className='font-bold text-4xl pt-6 pb-6'>Send Money</h1>
                <div className='flex flex-row ml-[-70px] space-x-5 items-center'>
                    <div className='bg-green-500  rounded-[100%] p-[10px] font-medium'>A</div>
                    <h1 className='font-bold text-2xl'>Friend's Name</h1>
                </div>
                <p className='font-semibold ml-[-180px]'>Amount (in Rs)</p>
                <input type='text' placeholder='Enter amount' className='border-2 p-2 rounded-md w-[300px]'></input>
                <button className='inline-flex items-center justify-center rounded-md w-[300px] bg-green-500 px-3.5 py-2.5 font-semibold  text-white'>Initiate Transfer</button>
            </div>
        </div>
    )
}
