import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import FavoritePage from './pages/FavoritePage'
import Layout from './layouts/Layouts'
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>} index/>
          <Route path='/favorite' element={<FavoritePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
