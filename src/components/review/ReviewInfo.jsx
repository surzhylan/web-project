import React from 'react'; 
const ReviewInfo = (props) => {
    return (
        <div className='review1'>
            <p>{props.text}</p>
            <div className='review1_info'>
                <img src={props.img}></img>
                <div className='review1_person'>
                    <h3>{props.name}</h3>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
        
    )
}

export default ReviewInfo;