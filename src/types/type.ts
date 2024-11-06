import {z} from 'zod'
import { CategoriesAPIResponseSchema } from '../Schemas/Recipe-Schemas'

export type categories = z.infer<typeof CategoriesAPIResponseSchema>