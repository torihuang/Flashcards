import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/FlipCard';
import Images from './assets/images';

const flashcards = [
  {
    _id: '1',
    frontText: 'Front of card 1',
    backText: 'Back of card 1',
    isFlipped: false,
  },
  {
    _id: '2',
    frontText: 'Front of card 2',
    backType: 'Image',
    backImage: Images.coffee,
    isFlipped: false,
  },
  {
    _id: '3',
    frontText: 'Front of card 3',
    backText: 'Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine. Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.',
    isFlipped: false,
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: flashcards,
    }
  }

  // Toggle card isFlipped state
  flipCard(cardId) {
    console.log('cardId', cardId);
    const newCardStates = this.state.flashcards
    const indexOfFlippedCard = newCardStates.map(card => card._id).indexOf(cardId)
    console.log('indexOfFlippedCard', indexOfFlippedCard);
    newCardStates[indexOfFlippedCard].isFlipped = !newCardStates[indexOfFlippedCard].isFlipped
    console.log('newCardStates', newCardStates);
    this.setState(newCardStates)
  }

  // Render all flashcards
  renderFlashcards() {
    return this.state.flashcards.map((flashcard, index) => {
      return (
        <Card
          key={flashcard._id}
          isFirst={index === 0}
          flipCard={this.flipCard.bind(this)}
          flashcard={flashcard} />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flashcards</h1>
        </header>
        <div className="flashcard-container">
          {this.renderFlashcards()}
        </div>
      </div>
    );
  }
}

export default App;
