import {z} from 'zod'
import { CategoriesAPIResponseSchema, SearchFiltersSchema, DrinksAPIresponse, DrinkAPIresponsechema, DrinkAPIresponse } from '../Schemas/Recipe-Schemas'
// se importan los esquemas de zod para validar los datos de la API y se los pasa como tipo de dato a las variables
export type categories = z.infer<typeof CategoriesAPIResponseSchema>
export type searchFilters = z.infer<typeof SearchFiltersSchema>
export type Drinks = z.infer<typeof DrinksAPIresponse>
export type Drink = z.infer<typeof DrinkAPIresponse>
// se exportan los tip
export type Recipe = z.infer<typeof DrinkAPIresponsechema>