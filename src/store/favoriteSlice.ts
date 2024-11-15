import {StateCreator} from "zustand"
import { Recipe } from "../types/type"

export type favoriteSlicetype = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoritesExist: (id: Recipe['idDrink']) => boolean
}

export const CreateFavoriteSlice : StateCreator<favoriteSlicetype> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) =>{
        if(get().favoritesExist(recipe.idDrink)){
            //console.log('si existe...')
            set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            })
        }else{
            //console.log('no existe...')
            set({
                favorites: [ ...get().favorites, recipe]
            })
        }
    },
    favoritesExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})