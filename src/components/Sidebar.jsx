import React, {useState} from 'react'
import '../css/sideBar.css'
import EdusparkIcon from '../assets/edusparkIcon.jpg'
import { GoHomeFill, GoContainer  } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const navigateToPage = (path) => {
    const newURl = path === '/home' ? 'Decks' 
    : path === '/home/flashcards' ? 'Flashcards'
    : path === '/home/cardReview' ? 'Card Review' 
    : 'Settings';
    setSideBarState(newURl)
    navigate(path)
  }
  const currentUrl = location.pathname === '/home' ? 'Decks' 
  : location.pathname === '/home/flashcards' ? 'Flashcards'
  : location.pathname === '/home/cardReview' ? 'Card Review' 
  : 'Settings';
  const [sideBarState, setSideBarState] = useState(currentUrl)
  return (
    <div className="sideBarContainer">
      <div className='siderBarTitleIconContainer'>
         {/* app icon */}
         <img src={EdusparkIcon}  alt='eduspark icon'/>
         {/* title */}
         <h2>Eduspark</h2>
      </div>
      <div className='navButtonsContainer'>
          <div className='listOfNavButtons'>
            {/* Card Review nav btn */}
            <div onClick={() => navigateToPage('/home/cardReview')} 
                  className={sideBarState == 'Card Review' ? 'navButton navButtonClicked' : 'navButton'}
                  >
              <GoHomeFill color={sideBarState == 'Card Review' ? '#0C7FDA' : '#5D7285'} size={25}/>
              <p>Card Review</p>
            </div>
            {/* Decks nav btn */}
            <div onClick={() => navigateToPage('/home')}
                 className={sideBarState == 'Decks' ? 'navButton navButtonClicked' : 'navButton'}>
              <GoContainer color={sideBarState == 'Decks' ? '#0C7FDA' : '#5D7285'} size={25}/>
              <p>Decks</p>
            </div>
            {/* Flashcard nav btn */}
            <div onClick={() => navigateToPage('/home/flashcards')}
                 className={sideBarState == 'Flashcards' ? 'navButton navButtonClicked' : 'navButton'}>
              <CgFileDocument  color={sideBarState == 'Flashcards' ? '#0C7FDA' : '#5D7285'} size={25}/>
              <p>Flashcards</p>
            </div>
            {/* Setting nav btn */}
            <div onClick={() => navigateToPage('/home/setting')}
                 className={sideBarState == 'Settings' ? 'navButton navButtonClicked' : 'navButton'}>
              <IoMdSettings color={sideBarState == 'Settings' ? '#0C7FDA' : '#5D7285'} size={25}/>
              <p>Settings</p>
            </div>
          </div> 
          {/* logout button */}
          <button className='logoutBtn' onClick={() => navigate('/')}>Logout</button>
      </div>

    </div>
  )
}

export default Sidebar