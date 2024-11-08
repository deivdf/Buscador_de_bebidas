import { useNavigate } from "react-router"
import { useAppStore } from "../store/useAppStore"
export default function Recetas() {
  const recetas = useAppStore((state)=> state.drinks)
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    navigate("/")
  }
  return (
    <div>
      {recetas.drinks.map((items)=>{
        return(
          <div key={items.idDrink} className="flex flex-col gap-6 md:flex-row bg-slate-50 shadow-2xl p-10 rounded-lg items-center">
            <div className="md:w-4/12 ml-20">
              <img src={items.strDrinkThumb} className="rounded-md" alt={items.strDrink} />
            </div>
            <div className="md:w-4/12 ml-20">
              <h2 className="font-bold text-4xl">{items.strDrink}</h2>
              <p>{items.strInstructionsES}</p>
            </div>
            <button 
              className="bg-sky-500 text-white p-2 rounded-lg mt-auto ml-auto hover:bg-sky-400 hover:text-black"
                onClick={()=>{handleSubmit()}}
              >
                volver
              </button>
          </div>
        )
      })}
    </div>
  )
}
