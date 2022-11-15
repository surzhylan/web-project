import TeamContent from "./TeamContent";
import React from 'react'; 
const Team = () => {
    return (
        <div className="team">
            <div className="team_text">
            <h2>Наша команда</h2>
            <p>Наша команда - это симбиоз профессионалов из образования и IT индустрии.</p>
            </div>
            <div className="team_info">
                <TeamContent title = "6 лет" text = "на рынке образования"/>
                <TeamContent title = "2000 +" text = "Выпускников"/>
                <TeamContent title = "75 %" text = "Трудоустроены"/>
                <TeamContent title = "21000 +" text = "Часов обучения"/>
            </div>
        </div>
    )
}

export default Team;