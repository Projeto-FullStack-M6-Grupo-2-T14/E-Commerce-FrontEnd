import { z } from "zod";


const updateAddressSchema = z.object({
    zipcode: z.string().max(8, 'Máximo de 8 caracteres').optional(),
    state: z.string().max(80, 'Máximo de 80 caracteres').optional(),
    city: z.string().max(120, 'Máximo de 120 caracteres').optional(),
    street: z.string().max(150, 'Máximo de 150 caracteres').optional(),
    number: z.string().max(12, 'Máximo de 12 caracteres').optional(),
    complement: z.string().max(300, 'Máximo de 300 caracteres').optional()
})

export type iUpdateAddress = z.infer<typeof updateAddressSchema>

export { updateAddressSchema }