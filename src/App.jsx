import Hero from './Components/Hero'
import Demo from './Components/Demo'
import './App.css'

export const App = () => {
  return (
    <main>
        <div className="main">
            <div className='gradient' />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}



