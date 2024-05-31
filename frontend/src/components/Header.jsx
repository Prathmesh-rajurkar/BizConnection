import React from 'react'
import Avatar from 'react-avatar';
import { AiOutlineSlack } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function Header() {
    return (
        <div className=' border-b-2 px-4 py-1 border-gray-100'>
            <div className='text-md font-bold flex flex-row items-center justify-between' >
                <div className='flex items-center'>
                    <div className='mx-2'>
                        <AiOutlineSlack />
                    </div>
                    <div className='hidden sm:block'>
                        BizConnection
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-gray-200 px-1 mx-3 flex flex-row items-center justify-around rounded-md '>
                        <CiSearch size={22}/>
                        <input className='bg-gray-200 border-0 py-2 px-2 rounded-md outline-none' type="search" name="" id="" placeholder='Search' />
                    </div>
                    <div>
                        <Avatar githubHandle="sitebase" size="35" round={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header