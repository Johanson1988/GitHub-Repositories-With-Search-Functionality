import React from 'react';
/**
 * React Functional Component
 * Renders spin while loading
 * repositories
 * 
 * PROPS:
 *  NO PROPS.
 */


const Loading:React.FC<{}> = () => {
    return(
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div><div className="gap-patch">
                <div className="circle"></div>
            </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
    )
}

export default Loading;