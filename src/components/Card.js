import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Card = ( { icon , title , text , className, action}) => {
    return (
        <div className={className} onClick={action}>
            <FontAwesomeIcon icon={icon} size="2x"/>
            <hr />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card;