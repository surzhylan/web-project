import React from 'react'; 
import { Link } from 'react-router-dom';
const Courses = (props) => {
    return (
        <div className={props.mainClass}>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            <p>{props.price}</p>
            <div className="course_bottom">
                <Link to="#"><img src="arrow.png" alt=""></img></Link>
                <div className={props.name}>
                    <img src={props.img} alt=""></img>
                </div>
            </div>
        </div>
        
    )
}

export default Courses;