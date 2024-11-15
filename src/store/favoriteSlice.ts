import {StateCreator} from "zustand"
import { Recipe } from "../types/type"

export type favoriteSlicetype = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const CreateFavoriteSlice : StateCreator<favoriteSlicetype> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) =>{
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
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
    }
})