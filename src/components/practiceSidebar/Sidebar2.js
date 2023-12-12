import React, { useState } from 'react'
import SingleLink from './SingleLink';
import { IoIosHome } from "react-icons/io";
import './sidebar2.css';
import MultiLink from './MultiLink';
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
// import { FaAngleUp } from "react-icons/fa6";

const Sidebar2 = () => {
    const defaultClasses = {
        authToggle:true,
        classNames:{open:'showNavbar',close:'hideNavbar'}
    }
    const [dynamicClasses,setDynamicClasses] = useState(defaultClasses);
  return (
    <>
    <div className='single-link'>
    <SingleLink path='/' content='Home' icon={<IoIosHome/>}/>
    <div className='multi-link-wrapper'>
        <div onClick={()=>setDynamicClasses({...dynamicClasses,authToggle:!dynamicClasses.authToggle})} >
            <MultiLink icon={<IoIosHome/>} content='Auth Links' angle={dynamicClasses.authToggle?<FaAngleDown/>:<FaAngleUp/>}/>
        </div>
        <div className=
        {`static ${dynamicClasses.authToggle?dynamicClasses.classNames.open:dynamicClasses.classNames.close}`}
        >
            <SingleLink path='/register' content='Register' icon={<IoIosHome/>}/>
            <SingleLink path='/login' content='Login' icon={<IoIosHome/>}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar2;