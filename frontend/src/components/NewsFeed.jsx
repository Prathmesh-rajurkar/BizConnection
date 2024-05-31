import React from 'react'
import AddPost from './AddPost'
import Feed from './Feed'

function NewsFeed() {
  return (
    <div>
        <h1 className='text-3xl font-bold '>News Feed</h1>
        <AddPost/>
        <Feed/>
    </div>
  )
}

export default NewsFeed