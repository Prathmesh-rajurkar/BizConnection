import React from 'react'
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

function AddPost() {
  return (
    <div className='w-full'>
      <div className='border-2 p-4 my-4 rounded-md border-gray-200'>
        <div className='flex my-2 flex-row items-center'>
          <Avatar githubHandle="sitebase" size="35" round={true} />
          <input type="text" name="" id="" className='w-full mx-3 outline-none' placeholder='What do you want to talk about?' />
        </div>
        <div className='flex p-3 justify-end'>
        <CiImageOn size={20} />
        </div>
      </div>
    </div>
  )
}

export default AddPost