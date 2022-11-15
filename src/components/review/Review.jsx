import React from 'react'; 
import ReviewInfo from './ReviewInfo';
const Review = () => {
    const reviews = [{
        text: 'В Decode меня приняли как своего! Рахим и Елнур научили меня и еще нескольких ребят mean-stack разработке🤓 Именно они донесли до меня, что практика это хорошо, но без должных теоритических знаний она почти бессмысленна👨🏻‍💻 Все три месяца обучения прошли очень интересно и на одном дыхании. Столько кодинга, столько интересных задач я еще не видывал💥 Теперь я полностью во всеоружии для воплощения моих идей и замыслов!',
        img: 'team1.png',
        name: 'Болат',
        title: 'Mean Stack разработчик'
    },{
        text: 'Decode выбрала не я, а мои родители, но я очень рада, что попала именно сюда. Обучение дало какой-то невидимый пинок к более углубленному изучению всего этого дела. Да и интереса больше стало. Научило всем азам, наверное. И помогло мне разобраться в этом более подробно. Сейчас я доделываю проект, который был финальным. Из-за нехватки времени он был еще «сырой» и совсем недоработанный, но сейчас он более играбельный. ',
        img: 'team2.png',
        name: 'Афина',
        title: 'Unity разработчик'
    },{
        text: 'Мне 16 лет и я учусь на 2 курсе колледжа IT👩‍💻 С детства мечтала о программировании, поэтому поступила в колледж. В выборе специальности мне помог брат✊ Когда впервые увидела рекламу Decode, сразу же захотела записаться, а когда пришла в школу, мне понравилось всё: и учителя очень классные и атмосфера тоже😊 Раньше не хорошо разбиралась в этих кодах, но после того как пришла сюда, я начала понимать что такое программирование😍',
        img: 'team4.png',
        name: 'Дина',
        title: 'С++ разработчик'
    },{
        text: 'Всем привет! Выбрала школу Decode, потому что предложение научиться основам веб-программирования с нуля за такое короткое время показалось заманчивым. Они не подвели☺️ Я научилась очень многому. Полюбила javascript🤓 Поняла принцип работы сайтов и различие между действительно крутыми сайтами и не очень😌⠀Сейчас работаю front-end разработчиком в компании ТОО "Aida Service. И я правда благодарна не только за знания.',
        img: 'team3.png',
        name: 'Болат',
        title: 'Mean Stack разработчик'
    }]
    return (
        <div className="reviews">
            <h2>Что говорят о нас</h2>
            {reviews.map(review=>(
                <ReviewInfo text = {review.text} img = {review.img} name = {review.name} title = {review.title} />
            ))}
           
        </div>
    
    )
}

export default Review;