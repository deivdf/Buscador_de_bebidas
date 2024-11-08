import { Drinks } from "../types/type"
import { useAppStore } from "../store/useAppStore"
import { useNavigate } from "react-router-dom"
type CardsProps = {
    drinks: Drinks
}
export default function Cards({drinks}: CardsProps) {
  const selectRecipes = useAppStore((state) => state.selectRecipes)
  const navigate = useNavigate()
  const handleSubmit = (id: string)=>{
    navigate('/recetas')
    selectRecipes(id)
  }
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3">
        {drinks.drinks.map((item)=>(
          <div key={item.idDrink} className="bg-slate-50 text-center p-5 m-5 w-10/12 shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
                <img 
                    src={item.strDrinkThumb} 
                    alt={`Imagen de ${item.strDrink}`}
                    className="hover:scale-150 translate-x-0 hover:rotate-6 transition-transform duration-300 ease-in-out hover:ease-out hover:duration-300 h-auto object-cover object-center"
                />
            </div>
            <div className="p-2 bg-cyan-100 rounded-lg my-5"> 
                <h2 className="font-black text-2xl truncate">{item.strDrink}</h2>
            </div>
            <button 
              className="bg-cyan-200 p-2 my-3 rounded-lg hover:bg-cyan-500 hover:text-white w-full font-bold"
              onClick={()=>handleSubmit(item.idDrink)}
              >Ver receta</button>
          </div>
        ))}
    </div>
  )
}
