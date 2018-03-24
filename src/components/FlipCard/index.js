import React from 'react'
import { branch, renderComponent }  from 'recompose'
import './style.css'

// Mark card as complete aka isVisible is false
const MarkAsCompleteButton = (props) => (
  <div onClick={props.markAsComplete} className='click-to-flip'>Done</div>
)

// BACK of card
const isImageCardBack = (props) => {
  return props.flashcard.backImage
}

const ImageCardBack = (props) => (
  <div className='card-image'>
    <img className='card-image' src={props.flashcard.backImage} alt='back of card' />
    <MarkAsCompleteButton
      markAsComplete={() => props.markAsComplete(props.flashcard._id)} />
  </div>
)

const TextCardBack = props => (
  <div className={props.flashcard.backText.length >= 20 ? 'card-content' : 'card-words'}>
    {props.flashcard.backText}
    <MarkAsCompleteButton
      markAsComplete={() => props.markAsComplete(props.flashcard._id)} />
  </div>
)

const ImageOrTextCardBack = branch(
  isImageCardBack,
  renderComponent(ImageCardBack)
)(TextCardBack)

// FRONT of card
const isImageCardFront = (props) => {
  return props.flashcard.frontImage
}

const ImageCardFront = (props) => (
  <img className='card-image' src={props.flashcard.frontImage} alt='front of card' />
)

const TextCardFront = props => (
  <div className='card-content'>
    {props.flashcard.frontText}
    {props.isFirst ? (<div className='click-to-flip'>Click to flip</div>) : null}
  </div>
)

const ImageOrTextCardFront = branch(
  isImageCardFront,
  renderComponent(ImageCardFront)
)(TextCardFront)

const Card = (props) => (
  <a className='card-container' onClick={() => props.flipCard(props.flashcard._id)}>
    <div className={`card ${props.flashcard.isFlipped ? 'flipped': ''}`}>
      <div className='card-side front-side'>
        <ImageOrTextCardFront
          isFirst={props.isFirst}
          flipCard={props.flipCard}
          flashcard={props.flashcard}
          markAsComplete={props.markAsComplete} />
      </div>
      <div className='card-side back-side'>
        <ImageOrTextCardBack
          isFirst={props.isFirst}
          flipCard={props.flipCard}
          flashcard={props.flashcard}
          markAsComplete={props.markAsComplete} />
      </div>
    </div>
  </a>
)

export default Card
