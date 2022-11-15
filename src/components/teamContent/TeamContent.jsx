import React from 'react'; 
const TeamContent = (props) => {
    return (
        <div className="info1">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        
    )
}

export default TeamContent;