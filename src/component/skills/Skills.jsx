import React from 'react';
import './skill.css'
import { ProgressBar, Button } from 'react-bootstrap';

export default function Skills({name,img,status,num}) {
    return (
        <div class="container">
            <div class="image">
                <img src={img}></img>
            </div>
            <div class="content">
                <div class="info">
                    <h2>
                       {name}
                    </h2>
                    <span> <ProgressBar  label={num} striped variant={status} now={num} /></span>
                </div>
            </div>
    </div>
            );


 
}
