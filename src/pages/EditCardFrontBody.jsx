import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/editCard.css'
const EditCardFrontBody = ({frontBody}) => {
  const navigate = useNavigate()
  return (
    <div className='editCardContainer'>
      <h2>Edit Front Body</h2>
      <div className='editCardContentContainer'>
        <div className='card_container'>
          <div className='cardShape'>
            <div className='card_frontBody'>
                  <h2>Normalization</h2>
            </div>
          </div>
        </div>
        <div className='editCardFormContainer'>
          <form>
            <div>
                <label for="editFrontSideInput" >Enter flashcard's frontside:</label>
                <input type="text"  name="editFrontSide" id="editFrontSideInput" required=""/>
            </div>
            <div className='editFlashCardButtonContainer'>
                <button onClick={() => navigate('/home/flashcards')}>
                  Cancel
                </button>
                <button>
                    Update
                </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default EditCardFrontBody