import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import classnames from 'classnames';

//import custom css
import './Navbar.css'
import { Link, useParams } from 'react-router-dom';

const MobileNav = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState(
    // {fullName:"sachinthya"}
  );
  return (
    <div className='flex w-full items-center justify-between lg:hidden'>
      <div className='w-28'>
        <span className='font-bold pl-2 text-white'>GHub</span>
      </div>
      <div className='flex items-center gap-3 relative'>
        <button className='bg-slate-700 text-white py-2 px-3 rounded-full'>Use App</button>
        {user?.fullName ? (
          <>
            <div onClick={() => setIsDropDownOpen((prev) => !prev)} className="border p-1 border-gray-300 text-cyan-300 w-10 h-10 rounded-full m-1">
              <img src='https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png' alt='' className='w-full h-full rounded-full object-cover' />
            </div>
            {isDropDownOpen && (
              <div className='absolute shadow-lg py-3 -bottom-28 -right-4 w-full bg-white z-20 flex flex-col gap-2 rounded-md'>
                <button className='text-left  shadow-sm text-black p-2 w-full hover:bg-slate-200 font-normal'>SingOut</button>
                <button className='text-left shadow-sm text-black p-2 w-full hover:bg-slate-200'>Profile</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span onClick={() => setIsDropDownOpen((prev) => !prev)} className='border p-1 broder-gray-300 txet-gray-900 rounded-full m-2'>
              <FaUserAlt className='w-full h-full text-white bg-gray-400 rounded-full p-1' />
            </span>
            {isDropDownOpen && (
              <div className='absolute shadow-lg py-3 -bottom-28 -right-4 w-full bg-white z-20 flex flex-col gap-2 rounded-md'>
                <button className='text-left  shadow-sm text-black p-2 w-full hover:bg-slate-200 font-normal'>Sign In</button>
                <button className='text-left  shadow-sm text-black p-2 w-full hover:bg-slate-200 font-normal'>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
const LargeNav = () => {
  const [isActiveNavTab, setIsActiveNavTab] = useState();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState(
    // {fullName:"sachitnhya"}
  );
  const [navTab, setNavTab] = useState(["Projects","Experience","Stack"]);
  const {type} = useParams();

  const handleonClick = (index) => {
    setIsActiveNavTab(index);
  }
  // <button key={index} onClick={() => handleonClick(index)} className={`hover:bg-gray-800 hover:rounded-md p-2 ${isActiveNavTab === index ? "focus:border-b-2" : "focus:border-none"}`}><span className='hover:text-gray-300'>{navtab}</span></button>
  return (
    <div className='hidden lg:inline container w-full px-20 mx-auto bg-slate-900 text-white py-2'>
      <div className='gap-4 w-full items-center justify-around lg:flex'>
        <div className='w-28'>
          <span className='font-bold'>GHub</span>
        </div>
        <div className='w-full shadow-md p-2 flex items-center justify-center gap-3 rounded-full'>
          <div id='navTab' className='flex items-center gap-2 pr-2'>
            {navTab.map((navtab, index) => {
              return (
                <Link to={`/${navtab}`} className='w-full mx-6'>
                  <span className={classnames(
                    "text-white",
                    {
                      "border-b-2 border-red-800 bg-gray-800 p-3 rounded-md": type === navtab
                    }
                  )}>{navtab}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <div className='flex items-center gap-1 rounded-full relative'>
          {user?.fullName ? (
            <div className='relative w-20'>
              <div onClick={() => setIsDropDownOpen((prev) => !prev)} className="border p-2 border-gray-300 text-cyan-300 w-10 h-10 rounded-full">
                <img src='https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png' alt='' className='w-full h-full rounded-full object-cover' />
              </div>
              {isDropDownOpen && (
                <div className='absolute shadow-lg py-3 -bottom-44 -right-0 bg-white z-20 flex flex-col gap-2 w-60 rounded-md'>
                <div className='border-b-2 border-gray-300 flex flex-col justify-center items-start'>
                  <button className='text-left  shadow-sm text-black p-2 w-full hover:bg-slate-200 font-normal'>Sign Out</button>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <button className='text-left shadow-sm text-black p-2 w-full hover:bg-slate-200'>Profile</button>
                  <button className='text-left shadow-sm text-black p-2 w-full hover:bg-slate-200'>Help</button>
                </div>
              </div>
              )}
            </div>
          ) : (
            <>
              <span onClick={() => setIsDropDownOpen((prev) => !prev)} className='border px-2 py-1 broder-gray-300 txet-gray-900 rounded-full bg-white'>
                <span className='flex items-center justify-around gap-5'>
                  <GiHamburgerMenu className='w-full h-full text-black' />
                  <FaUserAlt className='w-full h-full text-white bg-slate-400 rounded-full p-2' />
                </span>
              </span>
              {isDropDownOpen && (
                <div className='absolute shadow-lg py-3 -bottom-44 -right-0 bg-white z-20 flex flex-col gap-2 w-60 rounded-md'>
                  <div className='border-b-2 border-gray-300 flex flex-col justify-center items-start'>
                    <button className='text-left  shadow-sm text-black p-2 w-full hover:bg-slate-200 font-bold'>Sign Up</button>
                    <button className='text-left shadow-sm text-black p-2 w-full hover:bg-slate-200'>Sign In</button>
                  </div>
                  <div className='flex flex-col justify-center items-start'>
                    <button className='text-left shadow-sm text-black p-2 w-full hover:bg-slate-200'>Help</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <>
      <nav className='flex bg-slate-900 shadow-md lg:shadow-none w-full items-center'>
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  )
}

export default Navbar