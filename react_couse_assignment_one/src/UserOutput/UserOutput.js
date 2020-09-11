import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>A wild {props.username} has appeared</p>
            <p>The wild {props.username} has run away</p>
        </div>
    )
}

export default userOutput;