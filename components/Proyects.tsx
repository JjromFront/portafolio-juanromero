import React from 'react'
import Image from 'next/image';
import {useState, useEffect} from 'react'

export const Proyects = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    return (
        <section className='w-full h-full  items-center bg-[#F4F4F4] rounded-3xl'>
            <div className='flex flex-col justify-items-center items-center p-10'>
                <div className=' w-[18rem] flex items-center flex-col'>
                    <h2 className='text-3xl text-gray-300 mb-1 font-semibold '>My Creative Work</h2>
                    <span className='text-gray-99 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae fuga asperiores.</span>
                </div>

                <div className='my-10  p-10 md:p-20 w-full flex bg-[#ECE8E9] rounded-xl'>

                    <div className='md:w-1/2 :w-full  '>
                        <h3 className='text-2xl text-gray-300 mb-4 font-semibold xls:text-xl xls:font-bold '>Rick & Morty {width}</h3>
                        <span className='text-gray-99 text-sm  '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad id provident ut quaerat, eveniet distinctio praesentium? Deserunt tempora autem itaque officiis dignissimos earum adipisci.</span>
                        <button className='block mt-10 font-semibold text-teal-200 cursor-pointer px-6 lg:px-8 py-3 lg:py-4 border border-solid border-3 bg-cyan-100 rounded-full text-gray-200 hover:bg-cyan-200 border-none transition-all'>
                            Visit now
                        </button>
                    </div>

                    <div className='w-1/2 flex hidden md:block'>
                        <Image className="ml-20" src="/media/rick-and-morty.png" alt="rick" width={width <= 795 ? 150 : 250} height={width <= 795 ? 150 : 250} />
                    </div>
                </div>


            </div>
        </section>
    )
}
