import React from 'react';
import './userItem.css';
import  Avatar from './../../shared/UIElements/Avatar/Avatar/Avatar';
//import Card from './../../shared/UIElements/Card/Card';
import {Link} from 'react-router-dom';

const UserItem = (props)=>{
    return(
        <li className="user-item">
            <card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        {/*<img src={props.image} alt={props.name} /> */}
                        <Avatar image ={props.image} alt={props.name}/>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.places} {props.places === 1 ? 'Place': 'Places'}</h3>
                    </div>
                </Link>
            </card>
        </li>
    )
}

export default UserItem;

