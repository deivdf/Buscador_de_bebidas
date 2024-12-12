import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
export default function Headers() {
  const location = useLocation()
  console.log(location.pathname)
  const isHome = useMemo(()=> location.pathname === '/', [location.pathname])
  const feachtCategories = useAppStore((state) => state.feachtCategories)
  const categories = useAppStore((state) => state.categories) 
  const searchRecipes = useAppStore((state) => state.searchRecipes)
  // llamamos a la funcion showNotification para que funcione en este componente y hace el llamadoa al componente
  // hacemos el llamdo de la funcion espesifica porque los demas slice no estan incluidos en notification slice
  const showNotification = useAppStore((state) => state.showNotification)
  const [serchFilter, setSerchFilter] = useState({
    ingredient: '',
    category: ''
  })
  //useEffect se ejecuta una sola vez cuando el componente se monta 
  useEffect(() =>{
    feachtCategories()
  },[])
  //Todo Validar que no se ejecute cada vez que se escriba en el input
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=>{
    setSerchFilter({
      ...serchFilter,
      [e.target.name]: e.target.value
    })
  }
  // funcion para enviar el formulario y validar que no este vacio
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     //Todo Validar
    if(Object.values(serchFilter).includes('')){
      //para eh¿jecutar en otros componentes usamos el useAppStore y se llama ala funcion showNotification
      showNotification({
        text: 'Todos lo campos son obligatorios',
        error: true
      })
      console.log('Todos lo campos son obligatorios')
      return
    }
    //Consultar todos los resultados
    searchRecipes(serchFilter)
  }
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
                <NavLink className={({isActive})=> isActive ? "text-cyan-600 hover:text-cyan-600 font-bold px-4": "text-white hover:text-cyan-600 font-bold px-4"} to="/">Home</NavLink>
                <NavLink className={({isActive})=> isActive ? "text-cyan-600 hover:text-cyan-600 font-bold px-4": "text-white hover:text-cyan-600 font-bold px-4"} to="/Favorite">Favorite</NavLink>
              </nav>
            </div>
            { isHome && (
              <form
                className='md:w-1/2 2xl:w-1/3 bg-cyan-600 my-24 p-10 rounded-lg shadow space-y-6'
                onSubmit={handleSubmit}
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
                  onChange={handleChange}
                  value={serchFilter.ingredient}
                  />

                </div>
                <div className="space-y-4">
                  <label 
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg"
                  >
                    Selecione Categora
                  </label>
                  <select
                  id="category"
                  name='category'
                  className="p-3 focus:outline-none rounded-lg w-full"
                  onChange={handleChange}
                  value={serchFilter.category}
                  >
                  <option value="">-- Seleccione Categoria --</option>
                  {
                      categories.drinks.map((category)=>(
                        <option 
                          value={category.strCategory}
                          key={category.strCategory}
                          >
                            {category.strCategory}
                          </option>
                      ))
                  }
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
