import { useMemo } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
export default function Headers() {
  const location = useLocation()
  console.log(location.pathname)
  const isHome = useMemo(()=> location.pathname === '/', [location.pathname])
  console.log(isHome)
  //bg-header es una clase de tailwind que se crea en el archivo tailwind.config.js para agregar un background image
  return (
    <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex items-center justify-between">
              <div>
                <img className="w-32" src="logo.svg" alt="logotipo" />
              </div>
              <nav>
                {/* isActive para resaltar la pagina actual si esta seleccionada con operadores ternarios atraves de el callback que nos ofrece NavLink*/}
                <NavLink className={({isActive})=> isActive ? "text-orange-500 hover:text-orange-500 font-bold px-4": "text-white hover:text-orange-500 font-bold px-4"} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-orange-500 hover:text-orange-500 font-bold px-4": "text-white hover:text-orange-500 font-bold px-4"} to="/Favorite">Favorite</NavLink>
              </nav>
            </div>
            { isHome && (
              <form
                className='md:w-1/2 2xl:w-1/3 bg-cyan-600 my-24 p-10 rounded-lg shadow space-y-6'
              >
                <div className="space-y-4">
                  <label 
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                  >
                    Nombre o ingredientes
                  </label>
                  <input
                  type="text"
                  id="ingredient"
                  name='ingredient'
                  className="p-3 focus:outline-none rounded-lg w-full"
                  placeholder="Busca por ingredientes o nombre Ej. Vodka, Tequila, Cafe"
                  />

                </div>
                <div className="space-y-4">
                  <label 
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                  >
                    Selecione Categora
                  </label>
                  <select
                  id="ingredient"
                  name='ingredient'
                  className="p-3 focus:outline-none rounded-lg w-full"
                  >
                  <option value="">-- Seleccione Categoria --</option>
                  </select>
                </div>
                <input 
                  type="submit"
                  value="Buscar Recetas"
                  className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"

                />
              </form>
            )}
        </div>
    </header>
  )
}
