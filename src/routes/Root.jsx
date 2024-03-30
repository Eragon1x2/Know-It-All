import React from 'react'
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <Outlet></Outlet>
        </>
    )
}

export default Root;
