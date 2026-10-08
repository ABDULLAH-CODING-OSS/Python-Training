import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=15`
      )
      setUserData(response.data)
    } catch (error) {
      console.log(error)
      setUserData([])
    }
    setLoading(false)
  }

  useEffect(function () {
    window.scrollTo(0, 0) // start each page from the top
    getData()
  }, [index])

  // Default: nothing to show
  let printUserData = (
    <p className='text-stone-400 text-sm'>
      No photos found. Try the next page.
    </p>
  )

  // While loading: grey pulsing boxes of two different heights
  if (loading) {
    printUserData = Array.from({ length: 15 }).map(function (_, i) {
      return (
        <div
          key={i}
          className={`mb-4 break-inside-avoid animate-pulse rounded-lg bg-stone-800 ${
            i % 2 === 0 ? 'h-40' : 'h-64'
          }`}
        ></div>
      )
    })
  }
  // Loaded: one card per photo
  else if (userData.length > 0) {
    printUserData = userData.map(function (elem) {
      // keep each photo's real shape: width 500, height from the original ratio
      const height = Math.round((500 * elem.height) / elem.width)

      return (
        <a
          key={elem.id}
          href={elem.url}
          target='_blank'
          rel='noreferrer'
          className='mb-4 block break-inside-avoid'
        >
          <img
            className='h-auto w-full rounded-lg bg-stone-800'
            src={`https://picsum.photos/id/${elem.id}/500/${height}`}
            width={500}
            height={height}
            alt={`Photo by ${elem.author}`}
            loading='lazy'
          />
          <div className='mt-2 flex justify-between gap-2 px-1 text-sm'>
            <h2 className='truncate font-medium text-stone-100'>
              {elem.author}
            </h2>
            <span className='shrink-0 text-stone-500'>#{elem.id}</span>
          </div>
        </a>
      )
    })
  }

  return (
    <div className='min-h-screen bg-stone-950 text-stone-100'>
      <div className='mx-auto max-w-6xl px-4 py-10'>
        {/* Header */}
        <div className='mb-10 text-center'>
          <h1 className='font-serif text-4xl font-semibold tracking-tight'>
            Photo Gallery
          </h1>
          <p className='mt-2 text-sm text-stone-400'>
            Showing 15 photos per page
          </p>
        </div>

        {/* Gallery: columns make a masonry layout */}
        <div className='columns-2 gap-4 sm:columns-3 lg:columns-5'>
          {printUserData}
        </div>

        {/* Pagination */}
        <div className='mt-10 flex items-center justify-center gap-6'>
          <button
            disabled={index === 1}
            onClick={() => setIndex(index - 1)}
            className='cursor-pointer rounded-full bg-stone-100 px-6 py-2 text-sm font-semibold text-stone-900 transition hover:bg-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30'
          >
            Prev
          </button>

          <span className='text-sm text-stone-400'>Page {index}</span>

          <button
            onClick={() => setIndex(index + 1)}
            className='cursor-pointer rounded-full bg-stone-100 px-6 py-2 text-sm font-semibold text-stone-900 transition hover:bg-white active:scale-95'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App