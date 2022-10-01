import {React} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import Techniques from './components/Techniques'
import Contact from './components/Contact'

export default function App() {
    
  return (
    <div className='App'>
        <NavBar />
        <Introduction />
        <Techniques />
        <Contact />
    </div>
  )
}
