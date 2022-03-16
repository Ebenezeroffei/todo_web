import React, {useState} from 'react'
import {Error} from '../Misc/Error';
import { postData,generateEndpoints } from '../../utils/utils';

const SignIn = () => {
    const [userInfo,setUserInfo] = useState({
        'username':'',
        'password': '',
    });
    const [error,setError] = useState('');

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo,
                [name]: value
            }
        })
    }

    const signIn = () => {
        if(userInfo.username && userInfo.password){
            setError('');
            const url = generateEndpoints('login')
            postData(url,userInfo)
            .then((data) => {
                if(data.status === "OK"){
                    setUserInfo({
                        username: '',
                        password: ''
                    });
                    console.log(data.access)
                    console.log(data.refresh)
                }
                else{
                    setError(data.message);
                }
            })
            .catch(() => console.log("Error"))
            

        }
        else{
            setError("Provide username and password.");
        }
    }

    return <>
        <section className='mx-auto mt-4 max-w-md sm:rounded-lg border-2 py-8 px-4 mt-20'>
            <h2 className='text-left font-semivold text-gray-800'>Sign In</h2>
            <Error error={error}/>
            <form className='mt-4'>
                <div className='text-left'>
                    <label className='font-light text-gray-600 text-sm block text-left'>Username:</label>
                    <input type="text" onChange={handleChange} name='username' value={userInfo.username} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                </div>
                <div className='mt-6'>
                    <label className='font-light text-gray-600 text-sm block text-left'>Password:</label>
                    <input type="password" name='password' onChange={handleChange} value={userInfo.password} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500'/>
                </div>
                <p className='text-right text-xs font-normal'>
                    {/* <a href="#" className='text-blue-500'>Forgot Password</a> */}
                </p>
                <button type='button' onClick={signIn} className='text-white bg-blue-600 w-full rounded mt-6 text-lg py-1 hover:bg-blue-500'>Sign In</button>
            </form>
        </section>
    </>
}

export default SignIn;