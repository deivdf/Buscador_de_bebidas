import {z} from "zod"
// esto es un esquema de zod para validar los datos de una receta
// el esquema de zod es como un tipo de typescript pero para validar datos
export const CategoriesAPIResponseSchema= z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})
// los esquemas de zod son como los tipos de typescript pero para validar datos
export const SearchFiltersSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})
export const DrinkAPIresponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})
export const DrinksAPIresponse = z.object({
    drinks: z.array(DrinkAPIresponse)
})