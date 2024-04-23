import React from 'react'
import '../css/viewFlashCard.css'
import ViewFlashCardRow from '../components/ViewFlashCardRow'
import JudePic from '../assets/jude.webp'
import { useNavigate } from 'react-router-dom'
const Flashcards = () => {
  const navigate = useNavigate()
  return (
    <div className={'viewFlashCardContainer'}>
      <h2>View Flashcards</h2>
      {/* Flashcard table */}
      <div className='flashcardsContainer'>
        {/* Table Header */}
        <ViewFlashCardRow cardId={'Card Id'} cardName={'Card Name'} createdDate={'Date'} isHeader lastVisitDate={'Last Visit Date'}/>

        {/* Mockup flashcards for testing*/}
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
        <ViewFlashCardRow cardId={'FIG-123'} cardName={'Task 1'} createdDate={'Dec 5'} lastVisitDate={'Dec 5'} owner={JudePic}/>
      </div>
      <button className='createFlashcardBtn' onClick={() => navigate('/home/createFlashcard')}>
        Create
      </button>
    </div>
  )
}

export default Flashcards