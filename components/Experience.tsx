import React from 'react';
import Image from 'next/image';


export const Experience = () => {
    return (
        <section className='w-full h-full bg-[#ECE8E9] items-center rounded-md mb-10 rounded-3xl'>
            <div className='flex justify-center my-[9rem] mx-10 space-x-3 flex-wrap'>
                <div className='flex mb-5'>

                    <span className='text-5xl md:text-7xl font-bold text-pink mt-0 md:mt-[3rem] '>08</span>
                    <div className=' w-[13rem] md:w-[20rem] self-center'>
                        <h2 className='text-2xl text-gray-300 mb-2 font-semibold  '>Months Experience as Developer</h2>
                        <span className='text-gray-99 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime totam repellendus delectus aspernatur! Placeat, alias?</span>
                    </div>
                </div>

                <div className='flex'>

                    <div className='bg-[#E6F3FC] w-[9rem] p-5 h-[15rem] rounded-xl md:w-[13rem] md:h-[17rem] mr-4'>
                        <Image src="" alt="" width={150} height={170} />
                        <span className='text-gray-99 font-semibold'>Coding & Programming</span>
                    </div>

                    <div className='bg-[#F2E9EC] w-[9rem] p-5 h-[15rem] rounded-xl md:w-[13rem] md:h-[17rem]'>
                        <Image src="" alt="" width={150} height={170} />
                        <span className='text-gray-99 font-semibold'>Product & Brand Designer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
