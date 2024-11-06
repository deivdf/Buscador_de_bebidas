import { StateCreator } from "zustand"

//se crea el slice con el nombre de la funcion y el estado inicial para ello se crea una funcion que retorna el estado inicial
type category = {}
export type RecipeSliceType = {
    categories: category[]
}
export const createRecipeSlice : StateCreator<RecipeSliceType> = () =>({
    categories: []
})