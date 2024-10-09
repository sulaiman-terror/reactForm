import React, {useContext} from 'react';
import Logo from './Logo';
import { NavContext } from './Nav-context';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const {navLinks, SetNavLinks} = useContext(NavContext);


    return (
        <nav className='md:flex bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl curser-pointer flex items-center font-[Poppins]'>
             <Logo/>
             <ul>
                {navLinks.map((link, index)=>(
                    <li  className='inline-block xl:mx-4 lg:mx-3 sm:mx-2' key={index}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                    ))}
             </ul>
            </div>
        </nav>
    );
}

export default Nav;
