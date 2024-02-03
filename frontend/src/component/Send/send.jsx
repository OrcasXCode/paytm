import React from 'react'
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { toast, Toaster } from "react-hot-toast";

export function Send(props) {

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);    

    return (
        <div className='flex justify-center items-center h-screen'>
            <div> <Toaster /></div>
            <div className='flex flex-col w-[400px] h-[400px] space-y-4 border-2 p-4 justify-center items-center'>
                <h1 className='font-bold text-4xl pt-6 pb-6'>Send Money</h1>
                <div className='flex flex-row ml-[-70px] space-x-5 items-center'>
                    <div className='bg-green-500 h-[40px] w-[40px] flex justify-center items-center rounded-[100%] p-[10px] font-medium'>{name[0].toUpperCase()}</div>
                    <h1 className='font-bold text-2xl'>{name}</h1>
                </div>
                <p className='font-semibold ml-[-180px]'>Amount (in Rs)</p>
                <input type='text' placeholder='Enter amount' className='border-2 p-2 rounded-md w-[300px]'
                onChange={(e) => {
                    setAmount(e.target.value);
                }}></input>
                <button className='inline-flex items-center justify-center rounded-md w-[300px] bg-green-500 px-3.5 py-2.5 font-semibold  text-white'
                onClick={()=>{
                    fetch("http://localhost:3000/account/transfer", {
                          method: "POST",
                          body: JSON.stringify({
                            to:id,
                            amount:amount,
                          }),
                          headers: {
                            "Content-type": "application/json",
                            "Authorization" : `Bearer ${localStorage.getItem('token')}`
                          },
                        })
                    .then(res => {
                        if (res.ok) {
                            toast.success("Transaction Successful");
                        }
                    })
                    .catch((error) => {
                        toast.error("Transaction Failed");
                        console.error(error)
                    });
                }}>Initiate Transfer</button>
            </div>
        </div>
    )
}
