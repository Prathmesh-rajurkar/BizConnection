import React from 'react'
import { GoBell, GoBriefcase, GoHomeFill, GoKebabHorizontal, GoMail, GoPeople } from "react-icons/go";

function RightSideBar() {
    return (
        <div className='pl-10 pr-8'> 
            <div>
                <div className='flex flex-row items-center my-4 px-2 py-2 bg-gray-100 rounded-md '>
                    <GoHomeFill/>
                    <p className='mx-2'>News Feed</p>
                </div >
                <div className='flex flex-row items-center my-4 px-2 py-2  rounded-md '>
                    <GoPeople/>
                    <p className='mx-2'>My Network</p>
                </div>
                <div className='flex flex-row items-center my-4 px-2 py-2  rounded-md '>
                    <GoBriefcase/>
                    <p className='mx-2'>Jobs</p>
                </div>
                <div className='flex flex-row items-center my-4 px-2 py-2  rounded-md '>
                    <GoMail/>
                    <p className='mx-2'>Message</p>
                </div>
                <div className='flex flex-row items-center my-4 px-2 py-2  rounded-md '>
                    <GoBell/>
                    <p className='mx-2'>Notification</p>
                </div>
                <div className='flex flex-row items-center my-4 px-2 py-2  rounded-md '>
                    <GoKebabHorizontal/>
                    <p className='mx-2'>More</p>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar