import React from 'react'
import RightSideBar from './RightSideBar'
import NewsFeed from './NewsFeed'

function Main() {
  return (
    <div className='flex flex-row items-start justify-center py-10'>
        <div className='w-[21%] hidden md:block'>
        <RightSideBar/>
        </div>
        <div className='w-[90%] md:w-[75%]'>
            <NewsFeed/>
        </div>
    </div>
  )
}

export default Main