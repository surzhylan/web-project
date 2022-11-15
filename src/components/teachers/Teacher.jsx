import TeacherInfo from "./TeacherInfo";
import React from 'react'; 
const Teacher = () => {
    const teachers = [{
        img:'team1.png',
        name: 'Azamat Tolegenov',
        title:'Frontend developer'
    }, {
        img:'team2.png',
        name: 'Nazerke Balzhan',
        title:'Backend developer'
    },{
        img:'team3.png',
        name: 'Aibek Kumar',
        title:'Full-stack developer'
    },{
        img:'team4.png',
        name: 'Aigul Rakhmanbek',
        title:'Frontend developer'
    }]
    return (
        <div className="teachers">
            {teachers.map(teacher=>(
                <TeacherInfo img = {teacher.img} title = {teacher.name} text = {teacher.title}/>
            ))}
            
        </div>
    
    )
}

export default Teacher;