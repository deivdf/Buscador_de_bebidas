import {StateCreator} from "zustand"
import { Recipe } from "../types/type"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export type favoriteSlicetype = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoritesExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const CreateFavoriteSlice : StateCreator<favoriteSlicetype & NotificationSliceType, [], [],favoriteSlicetype> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) =>{
        if(get().favoritesExist(recipe.idDrink)){
            //console.log('si existe...')
            set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }),
            createNotificationSlice(set, get, api).showNotification({text: 'Eliminado de favorites', error: false})
        }else{
            //console.log('no existe...')
            set({
                favorites: [ ...get().favorites, recipe]
            })
            createNotificationSlice(set, get, api).showNotification({text: 'Agregado a favorites', error: false})
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoritesExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const StorageFavoritos = localStorage.getItem('favorites')
        if(StorageFavoritos){
            set({
                favorites: JSON.parse(StorageFavoritos)
            })
        }
    }
})