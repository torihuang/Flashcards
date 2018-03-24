import React, { Component } from 'react';
import './App.css';
import Card from './components/FlipCard';
import Images from './assets/images';

const flashcards = [
  {
    _id: '1',
    frontText: 'Front of card 1',
    backText: 'Back of card 1',
    isFlipped: false,
    isVisible: true,
  },
  {
    _id: '2',
    frontText: 'Front of card 2',
    backType: 'Image',
    backImage: Images.coffee,
    isFlipped: false,
    isVisible: true,
  },
  {
    _id: '3',
    frontText: 'Front of card 3',
    backText: 'Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine. Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.',
    isFlipped: false,
    isVisible: true,
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
    const newCardStates = this.state.flashcards
    const indexOfFlippedCard = newCardStates.map(card => card._id).indexOf(cardId)
    newCardStates[indexOfFlippedCard].isFlipped = !newCardStates[indexOfFlippedCard].isFlipped
    this.setState(newCardStates)
  }

  // Mark card as complete and remove from visible set
  markAsComplete(cardId) {
    const newCardStates = this.state.flashcards
    const indexOfCard = newCardStates.map(card => card._id).indexOf(cardId)
    newCardStates[indexOfCard].isVisible = false
    this.setState(newCardStates)
  }

  // Render all flashcards
  renderFlashcards() {
    return this.state.flashcards.map((flashcard, index) => {
      if (!flashcard.isVisible) return null
      return (
        <Card
          key={flashcard._id}
          isFirst={index === 0}
          flipCard={this.flipCard.bind(this)}
          flashcard={flashcard}
          markAsComplete={this.markAsComplete.bind(this)} />
      )
    })
  }

  // Reset all flashcards to be visible aka isVisible is true
  resetFlashcards() {
    const newCardStates = this.state.flashcards.map((flashcard) => {
      flashcard.isVisible = true
      return flashcard
    })
    this.setState(newCardStates)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flashcards</h1>
          <a className='reset-button' onClick={this.resetFlashcards.bind(this)}>RESET</a>
        </header>
        <div className="flashcard-container">
          {this.renderFlashcards()}
        </div>
      </div>
    );
  }
}

export default App;
