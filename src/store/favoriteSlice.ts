import {StateCreator} from "zustand"
import { Recipe } from "../types/type"

export type favoriteSlicetype = {
    favorites: Recipe[]
}

export const CreateFavoriteSlice : StateCreator<favoriteSlicetype> = (set) => ({
    favorites: []
})