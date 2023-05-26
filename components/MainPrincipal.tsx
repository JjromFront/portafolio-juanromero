import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const MainPrincipal = () => {

    const [widthTitle, setWidthTitle] = useState('lg:w-[702px]')

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 976 && window.innerWidth <= 1650) {
                setWidthTitle('lg:w-[500px]')
            } else {
                setWidthTitle('lg:w-[702px]')
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <section className='w-full h-full xls:'> 
            <div className='grid lg:grid-cols-12  w-full h-full'>
                <div className='lg:col-span-7 flex flex-col items-center justify-center lg:my-20 p-4 xls:content-center w-auto'>
                    <span className='font-bold text-xl text-gray-200 self-start my-2 text-center xls:self-center md:self-start '>
                        Hello! world
                    </span>
                    <h1 className='text-4xl lg:text-6xl text-gray-300 font-bold mb-2  self-start xls:self-center md:self-start'>
                        I'm Juan Romero
                    </h1>
                    <span className='text-gray-300 text-3xl lg:text-4xl self-start  font-medium  xls:self-center md:self-start'>
                        &lt;
                        <span className='text-pink font-medium'>Full Stack Developer</span>
                        &gt;{' '}
                    </span>
                    <span className='text-gray-99 text-sm self-start my-4   xls:text-center md:text-left'>
                        A very experienced full stack developer who has the ability to provide complete and scalable solutions across the entire technology stack, from frontend to backend.
                    </span>
                    <div className='space-x-2 self-center lg:self-start mt-5 flex flex-row items-center' >
                        <button className='block mt-4 lg:inline-block lg:mt-0 font-semibold text-teal-200 cursor-pointer px-4 lg:px-8 py-2 lg:py-4 border border-solid border-3 bg-gray-300 rounded-full text-white hover:bg-gray-200 transition-all'>
                            Hire Me
                        </button>
                        <button className='block mt-4 lg:inline-block lg:mt-0 fFont-semibold text-teal-200 cursor-pointer px-6 lg:px-8 py-3 lg:py-4 border border-solid border-3 bg-cyan-100 rounded-full text-gray-200 hover:bg-cyan-200 border-none transition-all'>
                            Download resume
                        </button>
                    </div>

                </div>
                <div className='lg:col-span-5 flex items-center justify-center hidden md:block w-auto md:w-1/3 lg:w-full mt-14'>
                    <Image  src='/media/Programmer.png' alt='programmer' width={350} height={350} />
                </div>

            </div>
        </section>
    );
};
