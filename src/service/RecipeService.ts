import axios from "axios"
import { CategoriesAPIResponseSchema } from "../Schemas/Recipe-Schemas"
export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
        console.log(result)
        return result.data
    }        
}