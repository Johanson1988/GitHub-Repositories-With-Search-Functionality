import React from 'react';
/**
 * React Functional Component
 * Renders not found message when
 * the user is not found on the Database
 * 
 * PROPS:
 *  NO PROPS.
 */

const NotFound: React.FC<{}> = () => 
    <div className="card-panel teal" style={{maxWidth: "60%", margin: "0 auto"}}>
        <h3 className="white-text">404 NOT FOUND</h3>;
    </div>

export default NotFound;