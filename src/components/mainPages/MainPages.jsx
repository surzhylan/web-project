import React from 'react'; 
import Application from '../application/Application';
import Company from '../company/Company';
import Form from '../form/Form';
import Main from '../main/Main';
import Prefer from '../prefer/Prefer';
import Review from '../review/Review';

function MainPages(){
    return (
        <div className='MainPages'>
            <Main />
            <Prefer />
            <Form />
            <Company />
            <Review />
            <Application />
        </div>
    );
}

export default MainPages;