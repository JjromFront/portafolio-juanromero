import React from 'react'
import Image from 'next/image';

export const Proyects = () => {
    return (
        <section className='w-full h-full  items-center'>
            <div className='flex flex-col justify-items-center items-center p-10'>
                <div className=' w-[18rem] flex items-center flex-col'>
                    <h2 className='text-3xl text-gray-300 mb-1 font-semibold '>My Creative Work</h2>
                    <span className='text-gray-99 text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae fuga asperiores.</span>
                </div>

                <div className='my-10 bg-white p-20 w-full flex'>

                    <div className='w-1/2 '>
                        <h3 className='text-2xl text-gray-300 mb-4 font-semibold '>Rick & Morty</h3>
                        <span className='text-gray-99 text-sm '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad id provident ut quaerat, eveniet distinctio praesentium? Deserunt tempora autem itaque officiis dignissimos earum adipisci.</span>
                        <button className='block mt-10 font-semibold text-teal-200 cursor-pointer px-6 lg:px-8 py-3 lg:py-4 border border-solid border-3 bg-cyan-100 rounded-full text-gray-200 hover:bg-cyan-200 border-none transition-all'>
                            Visit now
                        </button>
                    </div>

                    <div className='w-1/2 flex justify-content-center items-center'>
                        <Image className="" src="/media/rick-and-morty.png" alt="rick" width={250} height={250} />
                    </div>
                </div>


            </div>
        </section>
    )
}
