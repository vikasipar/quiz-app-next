import React from 'react';
import{Link} from 'react-router-dom';

function JoinQuiz() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center text-center space-y-24'>
        <div className='space-y-10'>
            <h1 className='text-4xl'>100xQuiz</h1>
            <h2 className='text-2xl'>Enter the code to join the quiz</h2>
            <div className='flex items-center'>
                <input type="text" placeholder='12345678' className='text-2xl border-2 border-stone-800 rounded-xl rounded-r-none py-1 px-3'/>
                <Link to={'/quiz'}><button className='text-xl px-6 py-2 bg-stone-800 hover:bg-stone-900 text-white rounded-xl rounded-l-none'>Join</button></Link>
            </div>  
        </div>
        <div>
            <p className='text-lg'>Create your account <span className='text-blue-800 cursor-pointer'>click here</span></p>
        </div>
        
    </div>
  )
}

export default JoinQuiz;