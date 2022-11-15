import React from 'react'; 
import Teacher from '../teachers/Teacher';
import Team from '../teamContent/Team';

function TeamPages(){
    return (
        <div className='teamPages'>
            <Team />
            <Teacher />
        </div>
    );
}

export default TeamPages;