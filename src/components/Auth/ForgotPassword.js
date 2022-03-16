import React,{ useState,useEffect } from 'react';
import {Error,Info} from './Error';
import {generateEndpoints,postData} from '../utils/utils';


const RequestPasswordReset = ({show,changeLevel}) => {
    let [error,setError] = useState('');
    let [email,setEmail] = useState('');

    const handleChange = (e) => {
        let value = e.target.value;
        setEmail(value);
    }

    const submitEmail = () => {
        let emailRegex = /^[a-zA-Z][a-zA-Z\d]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/
        if(emailRegex.test(email)){
            // Clear Error
            // Send request
            const url = generateEndpoints('passwordReset');
            let data = {email};
            postData(url,data)
            .then(resData => {
                setError('');
                console.log(data)
                changeLevel(1)
            })
            .catch(() => {
                setError("Enter a the same email you used when signing up.")
            })
        }
        else{
            setError("Enter a valid email.")
        }
    }

    if(show){
        return (
            <>
                <section className='mx-auto mt-4 max-w-md sm:rounded-lg border-2 py-8 px-4 mt-20'>
                    <h2 className='text-left font-semivold text-gray-800'>Request Password Reset</h2>
                    <Error error={error}/>
                    <form className='mt-4'>
                        <div className='text-left'>
                            <label className='font-light text-gray-600 text-sm block text-left'>Email:</label>
                            <input type="email" onChange={handleChange} name='email' value={email} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                        </div>
                        <button type='button' onClick={submitEmail} className='text-white bg-blue-600 w-full rounded mt-6 text-lg py-1 hover:bg-blue-500'>Request Password Reset</button>
                    </form>
                </section>
            </>
        );
    }
    return <></>;
}

const ValidateToken = ({show,changeLevel}) => {
    let [error,setError] = useState('');
    let [info,setInfo] = useState('Enter the token which has been sent to your email.');
    let [token,setToken] = useState('');

    useEffect(() => {
        show && setTimeout(() => setInfo(""),8000);
    },[show])

    const handleChange = (e) => {
        let value = e.target.value;
        setToken(value);
    }

    const submitToken = () => {
        if(token){
            // Send request
            const url = generateEndpoints('validateToken');
            let data = {token};
            postData(url,data)
            .then(resData => {
                console.log(resData)
                setError('');
                changeLevel(2);
                localStorage.setItem('token',token);
            })
            .catch(() => {
                setError("Enter the token sent to your email.");
            });
        }
        else{
            setError("Enter the token sent to your email.");
        }
    }

    if(show){
        return (
            <>
                <section className='mx-auto mt-4 max-w-md sm:rounded-lg border-2 py-8 px-4 mt-20'>
                    <h2 className='text-left font-semivold text-gray-800'>Validate Token</h2>
                    <Error error={error}/>
                    <Info info={info}/>
                    <form className='mt-4'>
                        <div className='text-left'>
                            <label className='font-light text-gray-600 text-sm block text-left'>Token:</label>
                            <input type="text" onChange={handleChange} name='token' value={token} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                        </div>
                        <button type='button' onClick={submitToken} className='text-white bg-blue-600 w-full rounded mt-6 text-lg py-1 hover:bg-blue-500'>Validate Token</button>
                    </form>
                </section>
            </>
        );
    }
    return <></>;
}

const ResetPassword = ({show,changeLevel}) => {

    let [error,setError] = useState('');
    let [newPasswords,setNewPasswords] = useState({
        'password1': '',
        'password2': ''
    });

    const handleChange = (e) => {
        let {name,value} = e.target;
        setNewPasswords(preNewPasswords => {
            return {
                ...preNewPasswords,
                [name]: value
            }
        })
    }

    const submitNewPassword = () => {
        let {password1,password2} = newPasswords;
        if(password1 && password2 && password1 === password2 ){
            // Send request
            const url = generateEndpoints('passwordResetConfirm');
            const token = localStorage.getItem('token');
            let data = {token,'password':password1};
            postData(url,data)
            .then(resData => {
                console.log(resData)
                setError('');
                localStorage.clear();
            })
        }
        else{
            setError("Make sure you have entered the same passwords in each field.")
        }
    }

    if(show){
        return (
            <>
                <section className='mx-auto mt-4 max-w-md sm:rounded-lg border-2 py-8 px-4 mt-20'>
                    <h2 className='text-left font-semivold text-gray-800'>Reset Password</h2>
                    <Error error={error}/>
                    <form className='mt-4'>
                        <div className='text-left'>
                            <label className='font-light text-gray-600 text-sm block text-left'>New Password:</label>
                            <input type="password" onChange={handleChange} name='password1' value={newPasswords.password1} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                        </div>
                        <div className='text-left mt-3'>
                            <label className='font-light text-gray-600 text-sm block text-left'>New Password Confirmation:</label>
                            <input type="password" onChange={handleChange} name='password2' value={newPasswords.password2} className='border-0 border-b-2 w-full mt-1 outline-none p-2 text-sm focus:border-blue-500' />
                        </div>
                        <button type='button' onClick={submitNewPassword} className='text-white bg-blue-600 w-full rounded mt-6 text-lg py-1 hover:bg-blue-500'>Reset Password</button>
                    </form>
                </section>
            </>
        );
    }
    return <></>;
}

const ForgotPassword = () => {
    let [levels,setLevels] = useState({
        level1: true,
        level2: false,
        level3: false
    });

    const changeLevel = (level) => {
        let newLevels = {level3:false}
        if(level === 1){
            newLevels = {level1:false,level2:true}
        }
        else if(level === 2){
            newLevels = {level2:false,level3:true}
        }
        setLevels(prevLevels => {
            return {
                ...prevLevels,
                ...newLevels
            }
        })
    }

    return (
        <>
            <section>
                <RequestPasswordReset  changeLevel={changeLevel} show={levels.level1}/>
                <ValidateToken changeLevel={changeLevel} show={levels.level2}/>
                <ResetPassword changeLevel={changeLevel} show={levels.level3}/>
            </section>
        </>
    );
}

export default ForgotPassword;