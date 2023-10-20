import React from 'react';

import {family} from "./simpsonsFamily";

const Simpson = ({item}) => {
    const {name, age, title ,photo} = item
    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Title: {title}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};