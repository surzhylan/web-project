import React from 'react'; 

const Application = () => {
    return (
        <section className='section-form'>
            <div className="application">
            <div className='app_text'>
                <h2>Запишитесь на консультацию</h2>
                <p>Поможем выбрать направление в IT и подберем вам курс</p>
            </div>
            <div className='app_form'>
                <form className='contact_form' method='POST'>
                    <div className='form_control1'>
                        <label>Имя</label>
                        <input type="text" placeholder="Имя" className='inputText'></input>
                    </div>
                    <div className='form_control1'>
                        <label>Телефон</label>
                        <input type="text" placeholder="Телефон" className='inputText'></input>
                    </div>
                    <buttton className="btn">Получить консультацию</buttton>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Application;