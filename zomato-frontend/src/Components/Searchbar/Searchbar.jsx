import React from 'react'
import {FiSearch} from 'react-icons/fi';

const MobileSearch = () => {
    return (
        <>
            <div className='lg:hidden'>

            </div>
        </>
    );
}

const LargeSearch = () => {
    return (
        <>
            <div className='hidden lg:inline container w-full px-20 mx-auto text-white mb-6'>
                <div className='flex justify-center items-center'>
                    <div className='w-2/4 bg-white text-black shadow-sm flex border border-gray-200 rounded-full'>
                        <div className='w-full flex hover:rounded-full'>
                            <label for='search-bar' className='w-full p-3'>
                                <div className='flex flex-col justify-center items-start hover:border-none w-full mx-3'>
                                    <span className='text-xs font-medium text-left mx-2'>Project</span>
                                    <input id='search-bar' type='text' placeholder='Project Name ?'
                                        className='focus:outline-none font-medium text-left text-xs mx-2' />
                                </div>
                            </label>
                            <div className='flex justify-center items-center bg-red-500 px-5 rounded-full'>
                                <button><FiSearch className='text-black '/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Searchbar() {
    return (
        <div className='flex bg-slate-900 shadow-md lg:shadow-none w-full items-center'>
            <MobileSearch />
            <LargeSearch />
        </div>
    )
}

export default Searchbar