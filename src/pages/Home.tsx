import Cards from "../components/Cards"
import { useAppStore } from "../store/useAppStore"

export default function Home() {
  const dirksResponse = useAppStore((state) => state.drinks)
  //sepude hacer con useMemo pero lo voy a dejar asi

  return (
    <>
        {dirksResponse.drinks.length===0 ? (<div><h1 className="font-semibold text-center text-6xl">No hay recetas</h1></div>): (
          <div>
            <h1 className="font-semibold text-center text-6xl">Recetas de Bebidas</h1>
            <Cards
              
              drinks={dirksResponse}
            />
        </div>)}
    </>
  )
}
