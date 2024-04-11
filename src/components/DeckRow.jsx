import React from 'react'
import '../css/decks.css'
const DeckRow = ({deckId, deckName, createdDate, isHeader}) => {
  return (
    <div className='deckRowContainer'>
      {/* Deck Id */}
      <div>
        <p style={{'color': '#828282', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{deckId}</p>
      </div>

      {/* Deck Name */}
      <div>
        <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{deckName}</p>
      </div>

      {/* Created Date */}
      <div>
        <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{createdDate}</p>
      </div>

      {/* Three dot */}
      <div>
        {!isHeader && 
            <div className="threeDot" onClick={() => console.log('eg')}> 
              <span/>
              <span/>
              <span/>
          </div>
        }
      </div>
    </div>
  )
}

export default DeckRow