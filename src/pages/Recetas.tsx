import { useNavigate } from "react-router"
import { useAppStore } from "../store/useAppStore"
export default function Recetas() {
  const recetas = useAppStore((state)=> state.selectedRecipe)
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    navigate("/")
  }
  return (
    <div key={recetas.idDrink} className="flex flex-col gap-6 md:flex-row bg-slate-50 shadow-2xl p-10 rounded-lg items-center">
            <div className="md:w-4/12 ml-20">
              <img src={recetas.strDrinkThumb} className="rounded-md" alt={recetas.strDrink} />
            </div>
            <div className="md:w-4/12 ml-20">
              <h2 className="font-bold text-4xl">{recetas.strDrink}</h2>
              <p>{recetas.strInstructionsES}</p>
              <p>Ingredientas: {recetas.strIngredient1} {recetas.strIngredient2} {recetas.strIngredient3} {recetas.strIngredient4} {recetas.strIngredient5} {recetas.strIngredient6}</p>
              <p>Medidas: {recetas.strMeasure1} {recetas.strMeasure2} {recetas.strMeasure3} {recetas.strMeasure4} {recetas.strMeasure5} {recetas.strMeasure6}</p>
            </div>
            <button 
              className="bg-sky-500 text-white p-2 rounded-lg mt-auto ml-auto hover:bg-sky-400 hover:text-black"
                onClick={()=>{handleSubmit()}}
              >
                volver
              </button>
    </div>
  )
}
