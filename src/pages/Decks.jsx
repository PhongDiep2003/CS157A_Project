import React from 'react'
import DeckRow from '../components/DeckRow'
import '../css/decks.css'
import AddIcon from '../assets/addIcon.png'
const Decks = () => {
  return (
    <div className={'decksPageContainer'}>
    <h2>Decks</h2>
    {/* Deck table */}
    <div className='decksContainer'>
      {/* Table Header */}
      <DeckRow deckId={'Deck ID'} deckName={'Deck Name'} createdDate={'Date'} isHeader/>
      {/* Mockup flashcards for testing*/}
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
      <DeckRow deckId={'123'} deckName={'Database Managment System'} createdDate={'Dec 5'}/>
    </div>
    <button className="addDeckBtn">
      <img src={AddIcon} style={{'width': '30px', 'height': '30px'}}/>
    </button>

  </div>
  )
}

export default Decks