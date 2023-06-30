import { z } from 'zod'


export const detPostUserSchema = z.object({
    id: z.number(),
    name: z.string()
})

export const commentSchema = z.object({
    id: z.number(),
    text: z.string(),
    user: detPostUserSchema
})

export const detailPosterSchema = z.object({
    id: z.number(),
    title: z.string(),
	brand: z.string(),
	model: z.string(),
	year: z.string(),
	fuel: z.string(),
	mileage: z.string(),
	color: z.string(),
	fipe_price: z.string(),
	price: z.string(),
	description: z.string(),
	cover_image: z.string().nullish(),
	is_active: z.boolean(),
    created_at: z.string(),
    user: detPostUserSchema,
    comments: z.array(commentSchema)
})

export type TDetailPoster = z.infer<typeof detailPosterSchema>
export type TComment = z.infer<typeof commentSchema>