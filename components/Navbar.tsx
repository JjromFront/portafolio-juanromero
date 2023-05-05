import React from 'react'
import  Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';


export const Navbar = () => {
    const [isOpen, setOpen] = useState('hidden')
    function handleNavbar() {
        if(isOpen === "visible")
        {
            setOpen('hidden')
        } else {
            setOpen('visible')
        }
    }

    return (
        <div className='w-full m-0 p-0 sticky top-0 '>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 xls:p-4  ">
                <div className="flex items-center flex-shrink-0 text-white mr-10">
                    <span className="font-bold text-lg tracking-tight text-black"><span className='font-semibold text-lg tracking-tight text-orange uppercase'>&lt;</span>Juan Romero<span className='font-semibold text-lg tracking-tight text-orange uppercase'>/&gt;</span></span>
                </div>
                <a className={`cursor-pointer lg:invisible `} onClick={handleNavbar}><Image src='./media/icons8-menu.svg' alt='' width={24} height={24}/></a>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto  lg:visible ${isOpen}`}>
                    <div className='ml-auto'>

                        <div className="text-sm lg:flex-grow space-x-6 ">
                            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink mr-4 cursor-pointer font-semibold xls:ml-6" href='.'>
                                Home
                            </Link>

                            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink mr-4 cursor-pointer font-semibold" href='/About'>
                                About
                            </Link>

                            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink mr-4 cursor-pointer font-semibold" href='/Experience'>
                                Experience
                            </Link>

                            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink mr-6 cursor-pointer font-semibold " href='/Blog'>
                                Blog
                            </Link>
                            
                            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-pink mr-6 cursor-pointer font-semibold " href='/Proyects'>
                                Proyects
                            </Link>


                            <button className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-teal-200 cursor-pointer px-8 py-3 border border-solid border-3 border-orange rounded-full text-black hover:text-white hover:bg-gray-200 transition-all">
                                Let's Chat 
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
