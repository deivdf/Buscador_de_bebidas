import axios from "axios"
import { CategoriesAPIResponseSchema, DrinkAPIresponsechema, DrinksAPIresponse } from "../Schemas/Recipe-Schemas"
import { Drink, searchFilters } from "../types/type"
// esta funcion es para obtener las categorias de la api
export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        return result.data
    }        
}
// esta funcion es para obtener los ingredientes de la api
export async function getRecipesByCategory(filters: searchFilters) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIresponse.safeParse(data)
    if(result.success) {
       return result.data
    }
}
// trae una receta por id de la api para ver su preparacion
export async function getRecipeById(id: Drink['idDrink']) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(url) 
    const result = DrinkAPIresponsechema.safeParse(data.drinks[0])
    console.log(result)
    if(result.success) {
        return result.data
    }
     
}