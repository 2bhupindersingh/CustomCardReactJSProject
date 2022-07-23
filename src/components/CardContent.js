import React, {useState} from 'react'

const CardContent = (props) => {
    const [showMore, setShowMore] = useState(false);
    const text = props.cardParagraph;
    return (
        <div className='card-content'>
            <div className='card-img'>
                <img src={props.cardImg} />
            </div>
            <p><span className='card-pargraph-content'>{showMore ? text: `${text.substring(0,150)}`}</span> <a onClick={()=> setShowMore(!showMore)}  className='button'>{showMore ? 'Read Less' : 'Read More'}</a></p>
            
        </div>
    )
}

export default CardContent
