import React from 'react'
import CardAvatar from './CardAvatar'

function CradHeader(props) {
    return (
            <div className='card-header'>
            <CardAvatar avatar={props.avatar} />
                <div className='card-header-content'>
                    <h4>{props.cardTitle}</h4>
                    <h6>{props.cardSubtitle}</h6>
                </div>
            </div>
    )
}

export default CradHeader
