import axios from 'axios';
import React from 'react'


const App = () => {

  const arr = [{

  },
  {

  },
  {

  }];
  const getData = ()=>{
    axios
    console.log('data aa gya');

  }
  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
      onClick={getData}
      className='bg-green-500 active:scale-95 mb-3 px-5 rounded text-white'>
        get data
      </button>
      
    </div>
  )
}

export default App
