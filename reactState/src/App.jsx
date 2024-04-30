
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Coke from './Coke'
import BaggedChips from './BaggedChips'
import Candy from './Candy'
import CardForAllProducts from './CardForAllProducts'


function App() {


  return (
    <div className='vending'>
      <BrowserRouter>
      <CardForAllProducts />
        <Routes>
          <Route path='Drink' element={<Coke />} />
          <Route path='Crunch' element={<BaggedChips />} />
          <Route path='Chocolate' element={<Candy />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
