import { StateCreator } from "zustand"
import { getCategories, getRecipesByCategory } from "../service/RecipeService"
import type { categories, Drinks, searchFilters } from "../types/type"
//se crea el slice con el nombre de la funcion y el estado inicial para ello se crea una funcion que retorna el estado inicial
export type RecipeSliceType = {
    //se crea el estado inicial para las categorias y las recetas
    categories: categories
    drinks: Drinks
    feachtCategories: () => Promise<void>
    searchRecipes: (SearchFilters: searchFilters) => Promise<void>
}
// sintaxis para crear un slice con zustand y se exporta la funcion
export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) =>({
    categories: {
        drinks:[]
    },
    drinks: {
        drinks:[]
    },
    //se crea la funcion para obtener las categorias desde la apo
    feachtCategories: async ()=>{
        const categories = await getCategories()
        set({categories})
    },
    //se crea la funcion para buscar recetas por filtros desde la api
    searchRecipes: async (filters) => {
        const drinks = await getRecipesByCategory(filters)
        set({
            drinks
        })
    }
})