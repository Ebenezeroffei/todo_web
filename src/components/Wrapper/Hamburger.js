import React from 'react'

const Hamburger = () => {
    return (
        <>
            <section className='hover:bg-gray-500 inline-block p-1.5 rounded-sm cursor-pointer'>
                <p className='w-7 h-0.5 rounded-full bg-white mb-1'></p>
                <p className='w-7 h-0.5 rounded-full bg-white mb-1'></p>
                <p className='w-7 h-0.5 rounded-full bg-white'></p>
            </section>
        </>
    );
}

export default Hamburger;