import React from 'react'; 
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const navigate = useNavigate()
    return (
        <div className="form">
            <div className="form_text">
                <h2>Начать просто. Попробуйте учиться прямо сейчас!</h2>
                <p>На нашей платформе собраны бесплатные курсы, которые помогут определиться с направлением и просто попробовать программирование на вкус прямо сейчас. Регистрируйтесь на портале и проходите обучение в любое удобное время!</p>
                <button onClick={()=>navigate('/aboutTeam')}>Начать обучение</button>
            </div>
            <img src="lamp.png" alt=''></img>
        </div>
    )
}

export default Form;