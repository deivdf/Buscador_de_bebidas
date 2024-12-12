import {lazy, Suspense} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
// lo mismo que abajo
const Home = lazy(()=> import('./pages/Home'))
import Recetas from './pages/Recetas'
import Layout from './layouts/Layouts'
//import FavoritePage from './pages/FavoritePage' se replaza para optimizar la pagina y que no se cargue todo de una vez
const FavoritePage = lazy(()=> import('./pages/FavoritePage'))
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <Suspense fallback="Cargando...">
              <Home/>
            </Suspense>
          } index/>
          <Route path='/favorite' element={
            <Suspense fallback="Cargando...">
              <FavoritePage/>
          </Suspense>} />
          <Route path='/recetas' element ={<Recetas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
