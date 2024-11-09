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
export const DrinkAPIresponsechema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructionsES: z.string().optional().nullable(),// Added strInstructionsES
    strIngredient1: z.string().nullable(), // Added strIngredient1 to strIngredient
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),// Added strMeasure1 to strMeasure6
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(), // Added strInstructions
})