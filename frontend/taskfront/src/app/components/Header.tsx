import Link from "next/link";
import { Button } from "@material-tailwind/react";
export default function Header() {
    return (
        
            <header className="">
            <div className="bg-gray-100 md:w-10/12 mx-auto p-5 rounded-lg shadow-md w-full">
                <div className="mb-4">
                    <p className="text-2xl font-bold">Tasks <strong className="text-lime-700">Manager App</strong></p>
                </div>
                <div className="flex mb-4">
                    <input type="search" placeholder="Rechercher" className="focus:border-blue-400 input border-blue-300 p-2 rounded-md w-full" />
                </div>
                <div className="flex justify-end space-x-4">
                    <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" href="/about">About</Link>
                    <Link className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" href='/signup'>S'inscrire</Link>
                    <Link className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600" href='/signin'>Se Connecter</Link>
                    <Link className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600" href='/home'>Home</Link>
                </div>
            </div>
        </header> 
        
    );
}