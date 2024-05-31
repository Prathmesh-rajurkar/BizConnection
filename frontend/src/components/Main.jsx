import React from 'react'
import RightSideBar from './RightSideBar'
import NewsFeed from './NewsFeed'

function Main() {
  return (
    <div className='flex flex-row items-start py-10'>
        <div className='w-[21%]'>
        <RightSideBar/>
        </div>
        <div className='w-[77%]'>
            <NewsFeed/>
        </div>
    </div>
  )
}

export default Main