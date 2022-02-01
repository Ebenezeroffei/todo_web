import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
    <div className='text-center text-2xl font-semibold bg-'>
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      <ForgotPassword/>
    </div>
  );
}

export default App;
