import Courses from "./Courses";
import React from 'react'; 
const Content = () => {
  const contents = [{
    title:'Data-analytics',
    text: 'Старт: 4 ноября (ВТ ПТ 19:00-21:00 )',
    price: '27 недели - 600,000 тг',
    name: 'course1_img',
    img: 'course1.png',
    mainClass: 'course1'
  },{
    title:'Python разработчик',
    text: 'Старт: 3 ноября (ЧТ СБ 15:00-17:00)',
    price: '40 недель - 600,000 тг',
    name: 'course1_img',
    img: 'course2.png',
    mainClass: 'course1 course2'
  },{
    title:'Java разработчик',
    text: 'Старт: 2 ноября (ЧТ СБ 15:00-17:00)',
    price: '40 недель - 500,000 тг',
    name: 'course3_img',
    img: 'course3.png',
    mainClass: 'course1 course3'
  },{
    title:'Web development ',
    text: 'Старт: 5 ноября (СР СБ 19:00-21:00)',
    price: '16 недель - 220,000 тг',
    name: 'course1_img',
    img: 'course1.png',
    mainClass: 'course4'
  },{
    title:'Базы данных | SQL',
    text: 'Старт: 25 октября (ВТ ЧТ 19:00-21:00)',
    price: '8 недель - 120,000 тг',
    name: 'course5_img',
    img: 'course5.png',
    mainClass: 'course4 course5'
  },{
    title:'Android разработка',
    text: 'Старт: 15 ноября (ВТ ПТ 20:00-22:00 Онлайн)',
    price: '16 недель - 200,000 тг',
    name: 'course6_img',
    img: 'course6.png',
    mainClass: 'course4 course6'
  }]
    return (
      <div className = "container_content">
        <div className="container_text">
            <h2>Ближайшие курсы программирования</h2>
            <p>Присоединяйтесь к потокам, которые стартуют уже совсем скоро</p>
        </div>
        <div className="courseInfo">
            <div className="courses">
            {contents.map(content=>(
              <Courses title = {content.title} text = {content.text} price = {content.price} name ={content.name} img = {content.img} mainClass = {content.mainClass}/>
            ))}
          
        </div>
      </div>
      </div>
    )
}

export default Content;
