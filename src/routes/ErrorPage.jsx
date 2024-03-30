import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    return (
       <div>
        <h1>{error.statusText}</h1>
        <p>{error.message}</p>
       </div>
        )
}

export default ErrorPage;
