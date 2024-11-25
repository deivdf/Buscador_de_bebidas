import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { favoriteSlicetype, CreateFavoriteSlice} from "./favoriteSlice"
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'
//se crea el store de la aplicacion y se le pasa la funcion createRecipeSlice para que cree el estado inicial de las categorias y las recetas
// ...a es un operador de propagacion que se usa para pasar los argumentos de un array a una funcion
// se pone <RecipeSliceType & favoriteSlicetype> para indicar que se necesitan los dos para validar
export const useAppStore = create<RecipeSliceType & favoriteSlicetype & NotificationSliceType>()(devtools((...a) =>({
    ...createRecipeSlice(...a),
    ...CreateFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))
// asi se trabaja para que los slices no qieden tan grandes se le conoce como patron de diseño "slice"