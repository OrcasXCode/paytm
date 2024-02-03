import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { toast, Toaster } from "react-hot-toast";

export function Signin(props) {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  
 return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div> <Toaster /></div>
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
           Enter your credential to access your account
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    onChange={(e)=>{
                      setUsername(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                  <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                    {' '}
                    Forgot password?{' '}
                  </a>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={()=>{
                    fetch('http://localhost:3000/user/signin', {
                    method: "POST",
                    body: JSON.stringify({
                      username,
                      password
                    }),
                    headers: {
                      "Content-type": "application/json",
                    }
                  })
                    .then(async function (res) {
                      if (res.ok) {
                        const data = await res.json();
                        const token=data.token;
                        toast.success("SignIn Successfull");
                        localStorage.setItem('token', token);
                        setTimeout(() => {
                          window.location.reload();
                          window.location.href = '/dashboard';
                        }, 1000);
                      } else {
                        throw new Error("Incorrect name or password");
                      }
                    })
                    .catch((e) => {
                      toast.error("Incorrect username or password");
                    });
                  }}
                >
                  Sign In <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
              <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </a>
          </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
