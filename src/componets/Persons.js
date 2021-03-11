import React from 'react';

const Person = (props) => {

    return (
        <>
            {
                props.data.map((person, index) => (
                    <div className="personContainer" key={index}>
                        <div>{person.name} {person.lastname}</div>
                        <div>Возраст: {person.age}</div>
                        <div>Пол: { person.sex === 'm' ? 'мужской' : 'женский' }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Person;
