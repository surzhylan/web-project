import React from 'react'; 
const PreferInfo = (props) => {
    return (
        <div className="prefer1">
            <div className="circle">
                <p className="circleText">{props.title}</p>
            </div>
            <div className="prefer1Text">
                <h2>{props.title2}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default PreferInfo;