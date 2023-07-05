import { z } from "zod";

const updateUserSchema = z.object({
    name: z.string().max(100, 'Máximo de 100 caracteres').optional(),
    email: z.string().max(60, 'Máximo de 60 caracteres').optional(),
    cpf: z.string().max(120, 'Máximo de 120 caracteres').optional(),
    phone: z.string().max(11, 'Máximo de 11 caracteres').optional(),
    birthday: z.string().max(12, 'Máximo de 12 caracteres').optional(),
    description: z.string().max(500, 'Máximo de 500 caracteres').optional()
})


export type iUpdateUser = z.infer<typeof updateUserSchema>

export { updateUserSchema }