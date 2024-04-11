import AuthPage from './pages/AuthPage'
import Decks from './pages/Decks';
import HomePage from './pages/HomePage'
import Settings from './pages/Settings';
import Flashcards from './pages/Flashcards';
import CardReview from './pages/CardReview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage/>}/>
        <Route path='/home' element={<HomePage/>}>
          <Route index element={<Decks/>} />
          <Route path='flashcards' element={<Flashcards/>}/>
          <Route path='cardReview' element={<CardReview/>}/>
          <Route path='setting' element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
