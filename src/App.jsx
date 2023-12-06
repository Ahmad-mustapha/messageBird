import { useState } from 'react'
import './App.css'
import { AboutUs, HowWeWork, Reviews} from './container/import'
import { Footer, Header, NavBar } from './component/import'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='messageBird__container'>
        <NavBar />
        <Header />
        <AboutUs />
        <HowWeWork />
        {/* <WhereWeAre /> */}
        <Reviews />
        <Footer />
      </div>
    </>
  )
}

export default App
