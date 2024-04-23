import React from 'react'
import '../css/createdeck.css'
import { useNavigate } from 'react-router-dom'
const CreateDeck = () => {
  const navigate = useNavigate()
  return (
    <div className='createDeckContainer'>
      <h2>Create new deck</h2>
      <div className='createDeckContentContainer'>
        <form>
          <div>
            <label for="deckname" >Enter deck's name:</label>
            <input type="text"  name="deckname" id="deckname" required=""/>
          </div>
          <div className='createDeckButtonContainer '>
            <button onClick={() => navigate('/home')}>
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

export default CreateDeck