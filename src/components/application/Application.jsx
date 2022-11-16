import React, { useState } from 'react'; 

const Application = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    function form_application(e){
        const users = JSON.parse(localStorage.getItem('user')) || [];
        
            e.preventDefault()
            const user = {
                name, phone
            }
            users.push(user)
            // localStorage.setItem("name", JSON.stringify(name));
            // localStorage.setItem("phone", JSON.stringify(phone));
            localStorage.setItem("user", JSON.stringify(users))
    }
    return (
        <section className='section-form'>
            <div className="application">
            <div className='app_text'>
                <h2>Запишитесь на консультацию</h2>
                <p>Поможем выбрать направление в IT и подберем вам курсы</p>
            </div>
            <div className='app_form'>
                <form className='contact_form' method='POST'>
                    <div className='form_control1'>
                        <label>Имя</label>
                        <input type="text" placeholder="Имя" className='inputText' onChange={(event)=> setName(event.target.value)} />
                    </div>
                    <div className='form_control1'>
                        <label>Телефон</label>
                        <input type="text" placeholder="Телефон" className='inputText' onChange={(event)=> setPhone(event.target.value)} />
                    </div>
                    <buttton className="btn" type="submit" onClick={form_application}>Получить консультацию</buttton>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Application;