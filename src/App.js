import './App.css';
import Card from './components/Card';

function App() {
  const cardData = [
    {
      id: 0,
      avatar: 'RS',
      cardTitle: 'Card Title',
      cardSubtitle: 'Card Subtitle here',
      cardImg:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
      cardParagraph:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit'
    }
  ]
  return (
    <div className="App">
      <Card 
      avatar={cardData[0].avatar} 
      cardTitle={cardData[0].cardTitle} 
      cardSubtitle={cardData[0].cardSubtitle}
      cardParagraph={cardData[0].cardParagraph}
      cardImg={cardData[0].cardImg}
       />
    </div>
  );
}

export default App;
