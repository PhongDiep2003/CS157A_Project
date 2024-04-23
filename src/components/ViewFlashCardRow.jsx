import React, {useState} from 'react'
import '../css/viewFlashCard.css'
import { useNavigate } from 'react-router-dom'
const ViewFlashCardRow = ({cardId, cardName, lastVisitDate, owner, createdDate, isHeader}) => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='flashcardRowContainer'>
      {/* Card Id */}
      <div>
        <p style={{'color': '#828282', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{cardId}</p>
      </div>

      {/* Card Name */}
      <div>
        <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{cardName}</p>
      </div>

      {/* Last visit date */}
      <div>
        <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{lastVisitDate}</p>
      </div>

      {/* Date */}
      <div>
        <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>{createdDate}</p>
      </div>

      {/* Owner */}
      <div>
        {isHeader ?
          <p style={{'color': '#000000', 'fontSize': '1.2rem', 'fontWeight': '600'}}>Owner</p>
          : <img src={owner} style={{'width': '40px', 'height': '40px', 'borderRadius': '50px'}}/>}
      </div>

      {/* Three dot */}
      <div>
      {!isHeader && 
          <div className="threeDotContainer" > 
              <div className='threeDot' onClick={() => setShowMenu(prev => !prev)}>
                <span/>
                <span/>
                <span/>
              </div>
          </div>
        }
        {showMenu && 
                    <div className="popupMenu">
                        <button onClick={() => navigate('/home/editcardtitle')}>
                          Edit Title
                        </button>
                        <button onClick={() => navigate('/home/editcardfrontbody')}>
                          Edit Front Body
                        </button>
                        <button onClick={() => navigate('/home/editcardbackbody')}>
                          Edit Back Body
                        </button>
                    </div>
        }
      </div>
    </div>
  )
}

export default ViewFlashCardRow