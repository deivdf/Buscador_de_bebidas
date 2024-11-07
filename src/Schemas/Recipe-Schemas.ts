import {z} from "zod"

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