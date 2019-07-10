import React from 'react';


function  NavBar({navBarText}) {
    return (
        <div>
            <form action="">
                <span className='p-3'>Search For A Book!</span>
                <input onChange={navBarText} type="text" name="" id=""/>
            </form>
        </div>
    )
}

export default NavBar;
