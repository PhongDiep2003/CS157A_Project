import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/editCard.css'
const EditCardBackBody = ({backBody}) => {
  const navigate = useNavigate()
  return (
    <div className='editCardContainer'>
      <h2>Edit Back Body</h2>
      <div className='editCardContentContainer'>
        <div className='card_container'>
          <div className='cardShape'>
            <div className='card_backBody'>
                <div>
                  <h2>fdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfadfdsafdsafasdfasdfsadfasdfasdfasdfadsfsfad</h2>
                </div>
            </div>
          </div>
        </div>
        <div className='editCardFormContainer'>
          <form>
            <div>
                <label for="editBackSideInput" >Enter flashcard's backside:</label>
                <input type="text"  name="editBackSide" id="editBackSideInput" required=""/>
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

export default EditCardBackBody