import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { MdOutlineUnfoldMore } from "react-icons/md";


const Nav = () => {
    return (
        <div className='navbar'>

            <div className='select'>
                <p className='select-text'>Select the project </p>
                <MdOutlineUnfoldMore />
            </div>

            <div className='part-two'>
                <p className='text-des'>GENERAL</p>
                <div className='general'>
                    <div className='nav-text'>
                        <p className='nav-text-p'>Indexes</p>
                        <BiChevronRight />
                    </div>

                    <div className='nav-text'>
                        <p className='nav-text-p'>API-keys</p>
                        <BiChevronRight />
                    </div>
                    <div className='nav-text'>
                        <p className='nav-text-p'>Demo Date</p>
                        <BiChevronRight />
                    </div>
                </div>

                <div className='management'>
                    <p className='text-des'>MANAGEMENT</p>
                    <div className='nav-text'>
                        <p className='nav-text-p'>Projects</p>
                        <BiChevronRight />
                    </div>
                    <div className='nav-text'>
                        <p className='nav-text-p-management'>Users</p>
                        <BiChevronRight />
                    </div>
                    <div className='nav-text'>
                        <p className='nav-text-p-management'>Billing</p>
                        <BiChevronRight />
                    </div>
                </div>

                <div className='need-help'>
                    <p className='nav-text-p-management'>Nedd Help?</p>
                    <p>Everything you need to know</p>
                    <p>Help Center</p>
                </div>

            </div>
        </div>
    )
}

export default Nav