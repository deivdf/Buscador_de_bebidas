import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
//se crea el store de la aplicacion y se le pasa la funcion createRecipeSlice para que cree el estado inicial de las categorias y las recetas
// ...a es un operador de propagacion que se usa para pasar los argumentos de un array a una funcion
export const useAppStore = create<RecipeSliceType>()(devtools((...a) =>({
    ...createRecipeSlice(...a)
})))