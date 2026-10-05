import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between bg-linear-to-b from-transparent via-transparent to-black/70' >
            
            {/* Top Level: Number Badge */}
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center select-none'>
                {props.id+1}
            </h2>
            
            {/* Bottom Level: Formatted stacked content block */}
            <div className='flex flex-col gap-4'>
                <p className='text-lg leading-relaxed text-white mb-14'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nobis cum placeat suscipit veritatis aut?
                </p>
                
                {/* Horizontal row exclusively for the buttons */}
                <div className='flex justify-between items-center gap-2'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition-colors'>
                      {props.tag}
                    </button>
                    <button className='bg-blue-600 text-white font-medium h-12 w-12 rounded-full flex justify-center items-center hover:bg-blue-700 transition-colors'>
                      <i className="ri-arrow-right-line text-lg"></i>
                    </button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent
