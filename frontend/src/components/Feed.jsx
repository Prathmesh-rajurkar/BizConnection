import React from 'react'
import Avatar from 'react-avatar'
import { CiBookmark, CiChat1, CiHeart } from 'react-icons/ci'

function Feed() {
  return (
    <div className='w-full'>


      <div className='p-2 border-b border-gray-200'>
        <div className='flex flex-row mb-2 items-center'>
          <div>
            <Avatar githubHandle="sitebase" size="49" round={true} />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold'>John Doe</h1>
            <p className='text-sm text-gray-500'>Design at Dropbox</p>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse molestiae quo distinctio fugit amet rerum odio voluptas exercitationem dolorum necessitatibus, eligendi ipsum eaque placeat alias excepturi eius quos recusandae, atque harum debitis perspiciatis?
        <div className='flex flex-row my-2  text-gray-600 items-center '>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>3.2k</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiChat1 size={20} />
            <p className='text-sm ml-2'>285</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>89</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiBookmark size={20} />
            <p className='text-sm ml-2'>Share</p>
          </div>
        </div>
      </div>

      <div className='p-2 border-b border-gray-300'>
        <div className='flex flex-row mb-2 items-center'>
          <div>
            <Avatar githubHandle="sitebase" size="49" round={true} />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold'>John Doe</h1>
            <p className='text-sm text-gray-500'>Design at Dropbox</p>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse molestiae quo distinctio fugit amet rerum odio voluptas exercitationem dolorum necessitatibus, eligendi ipsum eaque placeat alias excepturi eius quos recusandae, atque harum debitis perspiciatis?
        <div className='flex flex-row my-2  text-gray-600 items-center '>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>3.2k</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiChat1 size={20} />
            <p className='text-sm ml-2'>285</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>89</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiBookmark size={20} />
            <p className='text-sm ml-2'>Share</p>
          </div>
        </div>
      </div>

      <div className='p-2 border-b border-gray-200'>
        <div className='flex flex-row mb-2 items-center'>
          <div>
            <Avatar githubHandle="sitebase" size="49" round={true} />
          </div>
          <div className='mx-3'>
            <h1 className='font-bold'>John Doe</h1>
            <p className='text-sm text-gray-500'>Design at Dropbox</p>
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse molestiae quo distinctio fugit amet rerum odio voluptas exercitationem dolorum necessitatibus, eligendi ipsum eaque placeat alias excepturi eius quos recusandae, atque harum debitis perspiciatis?
        <div className='flex flex-row my-2  text-gray-600 items-center '>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>3.2k</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiChat1 size={20} />
            <p className='text-sm ml-2'>285</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiHeart size={20} />
            <p className='text-sm ml-2'>89</p>
          </div>
          <div className='flex flex-row mr-8 items-center'>
            <CiBookmark size={20} />
            <p className='text-sm ml-2'>Share</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feed