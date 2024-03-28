import React from 'react'
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default Root;
