import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Home from './components/Home'
import ProductDetailed from './components/ProductDetailed'
import IngrediateDetail from './components/IngrediateDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}>
          <Route index element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetailed/>} />
          <Route path="/ingredient" element={<IngrediateDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
