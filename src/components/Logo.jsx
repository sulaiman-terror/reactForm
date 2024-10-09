import book from '../assets/logos/book.svg'
import React from 'react';

const Logo = () => {
    return (
            <>
                <img className='h-14 w-14' src={book} alt="logo" />
                <span className='text-3xl text-green-800 mr-1'>
                    Open Libary
                </span>
            </>
    );
}

export default Logo;
