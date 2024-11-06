import { StateCreator } from "zustand"
import { getCategories } from "../service/RecipeService"
import type { categories } from "../types/type"
//se crea el slice con el nombre de la funcion y el estado inicial para ello se crea una funcion que retorna el estado inicial
export type RecipeSliceType = {
    categories: categories
    feachtCategories: () => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) =>({
    categories: {
        drinks:[]
    },
    feachtCategories: async ()=>{
        const categories = await getCategories()
        set({categories})
    }
})