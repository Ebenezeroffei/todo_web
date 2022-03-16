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

const Info = ({info}) => {
    return (
        <>
            {
                info && <div className='p-2 text-left border-2 mt-3 border-blue-300 bg-blue-100  rounded-sm text-sm font-normal text-gray-700'>
                    {info}
                </div>
            }
        </>
    );
}

const Sucess = ({success}) => {
    return (
        <>
            {
                success && <div className='p-2 text-left border-2 mt-3 border-green-300 bg-green-100  rounded-sm text-sm font-normal text-gray-700'>
                    {success}
                </div>
            }
        </>
    );
}

export {Error,Info,Sucess};