import { Routes, Route } from 'react-router-dom'

import Card from '../Card/'
import DetailedCountry from '../DetailedCountry/'


const Content = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<Card />}/>
        <Route path='/DetailedCountry' element={<DetailedCountry />}/>
      </Routes>
    </main>
  )
}

export default Content
