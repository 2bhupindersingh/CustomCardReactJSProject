import './Card.css';
import CardContent from './CardContent';
import CradHeader from './CradHeader';

const Card = (props) => {
return (
    <div className='card'>
       <CradHeader avatar={props.avatar} cardTitle={props.cardTitle} cardSubtitle={props.cardSubtitle} />
        <CardContent cardImg={props.cardImg} cardParagraph={props.cardParagraph} />
      </div>
)
}

export default Card
