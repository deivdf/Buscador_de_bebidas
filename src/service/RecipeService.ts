import axios from "axios"
import { CategoriesAPIResponseSchema } from "../Schemas/Recipe-Schemas"
import { searchFilters } from "../types/type"
// esta funcion es para obtener las categorias de la api
export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        console.log(result)
        return result.data
    }        
}
export async function getRecipesByCategory(filters: searchFilters) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    console.log(data)
}