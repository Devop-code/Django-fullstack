'use client'
import React,{useState,useEffect} from "react";
import api from "../api";

const Page = () => {
    
     const [username,setUsername] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [confirmPassword,setConfirmPassword] = useState<string>("")
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(username,password,confirmPassword,email)

      try {
      
        const res = await api.post("/api/user/register", {username,email,password});
       console.log(res)   
  }catch(err){
          alert(err);
          throw err;
      }
      
    }
  return (
    <form className="mt-4 mb-3" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your username
              </label>
              <input
                placeholder="JohnDoe"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="username"
                type="text"
               value={username}
                onChange={(e)=>setUsername( e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                placeholder="JohnDoe@gmail.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="email"
                type="email"
                value={email}
                onChange={(e)=>setEmail( e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e)=>setPassword( e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500 text-gray-300">
                  I accept the
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
              type="submit"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
