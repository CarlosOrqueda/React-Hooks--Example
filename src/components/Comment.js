import React, { Fragment } from 'react'

export default function Comment() {
    return (
        <Fragment>
            <h1>Comment</h1>
            <hr/>
            <div className="media">
                <img src="https://via.placeholder.com/64" alt="" className="mr-3"/>
                <div className="media-body">
                <h5 className="mt-0">Carlos</h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, neque?
            </div>
            </div>  
        </Fragment>
    )
}
