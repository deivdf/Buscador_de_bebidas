import {NavLink} from 'react-router-dom'
export default function Headers() {
  return (
    <header className="bg-slate-800">
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
        </div>
    </header>
  )
}
