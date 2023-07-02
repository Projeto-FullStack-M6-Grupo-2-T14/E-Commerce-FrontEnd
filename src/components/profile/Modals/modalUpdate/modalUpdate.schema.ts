import { z } from "zod";


const updatePosterSchema = z.object({
    brand: z.string().max(120, 'Máximo de 120 caracteres').optional(),
    model: z.string().max(300, 'Máximo de 300 caracteres').optional(),
    year: z.string().max(80, 'Máximo de 80 caracteres').optional(),
    fuel: z.string().max(80, 'Máximo de 80 caracteres').optional(),
    mileage: z.string().max(20, 'Máximo de 20 caracteres').optional(),
    color: z.string().max(120, 'Máximo de 120 caracteres').optional(),
    fipe_price: z.string().max(20, 'Máximo de 20 caracteres').optional(),
    price: z.string().max(20, 'Máximo de 20 caracteres').optional(),
    description: z.string().max(200, 'Máximo de 200 caracteres').optional(),
    cover_image: z.string().optional(),
    is_active: z.boolean().optional(),
    image_one: z.string().optional(),
    image_two: z.string().optional(),
    image_three: z.string().optional(),
    image_four: z.string().optional(),
    image_five: z.string().optional(),
    image_six: z.string().optional(),
    image_seven: z.string().optional(),
    image_eigth: z.string().optional(),
    image_nine: z.string().optional(),
    image_ten: z.string().optional()
})


export type iUpdatePoster = z.infer<typeof updatePosterSchema>

export { updatePosterSchema }