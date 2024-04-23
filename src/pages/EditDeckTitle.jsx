import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/editCard.css'
const EditDeckTitle = ({deckTitle}) => {
  const navigate = useNavigate()
  return (
    <div className='editCardContainer'>
      <h2>Edit Deck Title</h2>
      <div className='editCardContentContainer'>
        <div className='card_container'>
          <div className='cardShape'>
            <div className='card_frontBody'>
                  <h2>Deck Title</h2>
            </div>
          </div>
        </div>
        <div className='editCardFormContainer'>
          <form>
            <div>
                <label for="editDeckTitleInput" >Enter deck's title:</label>
                <input type="text"  name="editDeckTitleSide" id="editDeckTitleInput" required=""/>
            </div>
            <div className='editFlashCardButtonContainer'>
                <button onClick={() => navigate('/home')}>
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

export default EditDeckTitle