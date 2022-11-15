import React from 'react'; 
const Footer = () => {
    return (
      <div className = "footer">
        <div className="container">
          <div className="block_1">
            <h2>Decode</h2>
            <p className="subtitle top">Главная</p>
          </div>
          <div className="block_2">
            <h2>Курсы</h2>
            <ul className="top">
              <li>Java Developer</li>
              <li>Модуль Java Start</li>
              <li>Java Bootcamp</li>
              <li>Модуль Java Core</li>
              <li>Java Pro</li>
              <li>UX/UI Design</li>
            </ul>
          </div>
          <div className="block_3">
            <h2>Вход</h2>
            <div className="contact_content top">
              <p>Регистрируйтесь на нашем портале и начинайте кодить прямо сейчас</p>
              <button>Войти в портал</button>
            </div>
            
          </div>
          <div className="block_4">
            <h2>Контакты</h2>
            <p className="contacts_number top">
              <span className="phone_number">
                8-777-000-xx-xx <br />
              </span>
              <span className="phone_number">
                8-777-111-xx-xx
              </span>
                <br />
                Контактный номер 
            </p>

            <p> 
              Ул.Манаса 157, 6-ой этаж
            </p>
            <p>
              decode.xxx@mail.ru
            </p>
          </div>
        </div>
      </div>
    )
}

export default Footer;