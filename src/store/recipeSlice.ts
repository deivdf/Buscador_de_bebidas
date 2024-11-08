import { StateCreator } from "zustand"
import { getCategories, getRecipesByCategory } from "../service/RecipeService"
import type { categories, searchFilters } from "../types/type"
//se crea el slice con el nombre de la funcion y el estado inicial para ello se crea una funcion que retorna el estado inicial
export type RecipeSliceType = {
    categories: categories
    feachtCategories: () => Promise<void>
    searchRecipes: (SearchFilters: searchFilters) => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) =>({
    categories: {
        drinks:[]
    },
    //se crea la funcion para obtener las categorias desde la apo
    feachtCategories: async ()=>{
        const categories = await getCategories()
        set({categories})
    },
    //se crea la funcion para buscar recetas
    searchRecipes: async (filters) => {
        await getRecipesByCategory(filters)
    }
})