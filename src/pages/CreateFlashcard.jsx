import React from 'react'
import '../css/createflashcard.css'
import { useNavigate } from 'react-router-dom'
const CreateFlashcard = () => {
  const navigate = useNavigate()
  return (
    <div className='createFlashcardContainer'>
      <h2>Create new flashcard</h2> 
      <div className='createFlashcardContentContainer'>
        <form>
          <div>
            <label for="flashcardname" >Enter flashcard's name:</label>
            <input type="text"  name="flashcardname" id="flashcardname" required=""/>
            <label for="frontside" >Enter flashcard's title:</label>
            <input type="text"  name="frontside" id="frontside" required=""/>
            <label for="backside" >Enter flashcard's backside:</label>
            <input type="text"  name="backside" id="backside" required=""/>
          </div>
          <div className='createFlashcardButtonContainer '>
            <button onClick={() => navigate('/home/flashcards')}>
              Cancel
            </button>
            <button>
                Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateFlashcard