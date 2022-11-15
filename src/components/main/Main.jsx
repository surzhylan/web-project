import React from 'react'; 
import { Link } from 'react-router-dom';
const Main = () => {
    return (
      <div className = "main">
        <img src="main_content.png" alt=""></img>
        <h1>Decode - это новый подход к IT образованию!</h1>
        <p>Обучайся, развивайся и строй успешную карьеру в IT!</p>
        <div className="buttonMain">
            <button><Link>Получить консультацию</Link></button>
        </div>
      </div>
    )
}

export default Main;