import React from 'react'
import Appbar from './Components/Appbar'
import Filters from './Components/Filters'
import Items from './Components/items'
import SeasonSpecial from './Components/SeasonSpecial'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Appbar/>
      <Filters/>
      <Items/>
      <SeasonSpecial/>
      <Footer/>
      
    </>
  )
}

export default App