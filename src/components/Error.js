import React from 'react';

const Error = ({error}) => {
    return (
        <>
            {
                error && <div className='p-2 text-left border-2 mt-3 border-red-300 bg-red-100  rounded-sm text-sm font-normal text-gray-700'>
                    {error}
                </div>
            }
        </>
    );
}

export default Error;