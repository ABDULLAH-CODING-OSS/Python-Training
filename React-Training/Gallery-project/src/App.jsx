import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';



const App = () => {

  const [userData, setUserData]=useState([])

  const [index, setIndex] = useState(1)
 
  const getData = async ()=>{
   const response =  await axios.get('https://picsum.photos/v2/list?page=3&limit=15')
    console.log(response.data);

    setUserData(response.data)

    Console.log(response.data);

  }

  useEffect(
    function(){
      getData()

    },[]
  )

  let printUserData = <h3 className='text-gray-400 text-xs '>No User Available</h3>

  if(userData.length>0){
    printUserData = userData.map(
      function(elem){
        return <div
    key={elem.id}
    className="flex flex-col overflow-hidden h-52 w-44 text-black rounded-xl"
  ><a href={elem.url}>
          <img
      className="h-40 w-full object-cover"
      src={elem.download_url}
      alt={elem.author}
    />
         <div className="px-2 py-1">
      <h2 className="text-sm text-white uppercase  text-center font-semibold truncate">{elem.author}</h2>
      
    </div>
    </a>
        </div>
      }
    )
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button 
      onClick={getData}
      className='bg-green-500 active:scale-95 mb-3 px-5 rounded text-white'>
        get data
      </button> */}
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 px-4 py-2 rounded'
        onClick={()=>{
          Console.log('Hello')
        }}>
          Prev
          </button>
        <button className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 px-4 py-2 rounded'
          onClick={()=>{
          Console.log('Hello')
        }}>
          Next
          </button>
      </div>
    </div>
  )
}

export default App
