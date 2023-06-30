import { useReducer } from 'react'
import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Modal from './components/Modal'
import SkillsSection from './components/SkillsSection'
import './styles/globals.sass'
import IState from './types/IState'

function App() {
  const initialState: IState = {
    isOpen: false,
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  }

  const [state, dispatch] = useReducer(
    (prevState: IState, updatedState: IState) => {
      return { ...prevState, ...updatedState }
    },
    initialState
  )

  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection state={state} dispatch={dispatch} />
      <Modal state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
