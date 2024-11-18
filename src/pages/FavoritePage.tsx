import { useAppStore } from "../store/useAppStore"
import { Recipe } from "../types/type"

export default function FavoritePage() {
  const favorites = useAppStore((state) => state.favorites)
  const eliminar = useAppStore((state) => state.handleClickFavorite)
  const renderIngredients = () =>{
    const ingredientes : JSX.Element[] = []
    for (let i = 1; i<favorites.length ; i++) {
      const Ingrediente = favorites.map((item) => item[`strIngredient${i}` as keyof Recipe])
      const Measure = favorites.map((item) => item[`strMeasure${i}` as keyof Recipe])
      if(Ingrediente && Measure){
        ingredientes.push(
          <li key={i} className="text-lg font-normal">
            {Ingrediente} - {Measure}
          </li>
        )
      }
    }
    return ingredientes
  }
  return (
    <div className="text-center">
      <h2 className="text-6xl font-extrabold">Favorite</h2>
      <div>
          {favorites.length > 0 ? (
            <div>
              {favorites.map((item) =>(
                <div key={item.idDrink} className="flex flex-col mt-6 gap-6 md:flex-row bg-slate-50 shadow-2xl p-10 rounded-lg items-center">
                    <div className="md:w-4/12 ml-20">
                      <img src={item.strDrinkThumb} className="rounded-md" alt={item.strDrink} />
                    </div>
                    <div className="md:w-4/12 ml-20">
                      <h2 className="font-bold text-4xl">{item.strDrink}</h2>
                      <ul>
                        {renderIngredients()}
                      </ul>
                      <p>{item.strInstructionsES}</p>
                    </div>
                    <button
                        type='button'
                        className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-2 rounded-lg mt-auto ml-auto'
                        onClick={()=> {
                          eliminar(item)
                          }}
                      >
                       Eliminar
                      </button>
                </div>
              ))}
            </div>
          ): (<p className="pt-10">No hay bebidas favoritas por el momento, Elige unas...</p>)}
      </div>
    </div>
  )
}
