import React,{useState} from 'react';
import { postData } from '../utils/utils';
import Error from './Error';

const SignUp = () => {

    const [userInfo,setUserInfo] = useState({
        'username': '',
        'email': '',
        'password': '',
        'password2': '',
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

    const signUp = () => {
        const {username,password,email,password2} = userInfo;
        const emailRegex = /^[a-zA-Z][a-z\d]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/;
        if(username && password == password2 && emailRegex.test(email)){
            setError('');
            let url = "http://localhost:8000/auth/register/"
            postData(url,userInfo)
            .then(data => {
                console.log(data);
            })
            .catch(() => console.log("Couldn't sign up"))
        }
        else{
            setError('Fill in the fields.');
        }
    }


    return (
        <>
            <section className='mx-auto mt-4 max-w-md sm:rounded-lg border-2 py-8 px-4 mt-20'>
                <h2 className='text-left font-semivold text-gray-800'>Sign Up</h2>
                <Error error={error}/>
                <form className='mt-4'>
                    <div className='text-left'>
                        <label className='font-light text-gray-600 text-sm block text-left'>Username:</label>
                        <input type="text" onChange={handleChange} name='username' value={userInfo.username} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                    </div>
                    <div className='mt-6'>
                        <label className='font-light text-gray-600 text-sm block text-left'>Email:</label>
                        <input type="email" onChange={handleChange} name='email' value={userInfo.email} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                    </div>
                    <div className='mt-6'>
                        <label className='font-light text-gray-600 text-sm block text-left'>Password:</label>
                        <input type="password" name='password' onChange={handleChange} value={userInfo.password} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500'/>
                    </div>
                    <div className='mt-6'>
                        <label className='font-light text-gray-600 text-sm block text-left'>Password Confirm:</label>
                        <input type="password" onChange={handleChange} name='password2' value={userInfo.password2} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                    </div>
                    <button type='button' onClick={signUp} className='text-white bg-blue-600 w-full rounded mt-6 text-lg py-1 hover:bg-blue-500'>Sign Up</button>
                </form>
            </section>
        </>
    );
}

export default SignUp;