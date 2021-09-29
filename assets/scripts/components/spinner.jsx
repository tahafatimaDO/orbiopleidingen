import React from 'react';
 
 const Spinner = () => (
    <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span className="sr-only">Loading...</span>
    </>
 );
 
 export default Spinner;