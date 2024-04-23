import React, {useState} from 'react'
import '../css/card.css'
const Card = () => {
  const [isOnFront, setIsOnFront] = useState(true)
  return (
    <div className='cardContainer'>
      {isOnFront ?
        <div className='frontCardContainer'>
          <h1>Normalization</h1>
        </div>
                :
        <div className='backCardContainer'>
          <div>
            <h1>The process of organizing data in a database to reduce redundancy and inconsistent dependency.</h1>
          </div>
        </div>
      }
      <div>
        <button className={isOnFront ? 'switchsidebuttonclicked' : 'switchsidebuttonnotclicked'} onClick={() => setIsOnFront(true)}>Front</button>
        <button className={!isOnFront ? 'switchsidebuttonclicked' : 'switchsidebuttonnotclicked'} onClick={() => setIsOnFront(false)}>Back</button>
      </div>


    </div>
  )
}

export default Card