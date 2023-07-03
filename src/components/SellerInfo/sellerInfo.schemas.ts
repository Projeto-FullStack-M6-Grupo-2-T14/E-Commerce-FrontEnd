import { z } from 'zod'


export const sellerInfoSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string()
})

export type TSellerInfo = z.infer<typeof sellerInfoSchema>