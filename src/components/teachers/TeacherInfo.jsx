import React from 'react'; 
const TeacherInfo = (props) => {
    return (
        <div className="teacher1">
            <img src={props.img} alt=""></img>
            <div className="teach_text">
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            </div>
        </div>
        
    )
}

export default TeacherInfo;