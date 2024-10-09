import React, {useContext} from 'react';
import Logo from './Logo';
import { NavContext } from './Nav-context';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const {navLinks, SetNavLinks} = useContext(NavContext);

    const handleAddLink = () =>{
        SetNavLinks((prevLinks)=>[...prevLinks, {label:'NewLink', path:'NewLink'}])
    }

    return (
        <nav className='md:flex bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl curser-pointer flex items-center font-[Poppins]'>
             <Logo/>
             <ul>
                {navLinks.map((link, index)=>(
                    <li key={index}>
                        <NavLink to={link.path}
                            activeClassName = "active">
                            {link.label}
                        </NavLink>
                    </li>
                    ))}
             </ul>
             <button onClick={handleAddLink}>add New Link</button>
            </div>
        </nav>
    );
}

export default Nav;
