import { z } from "zod";


const createPosterSchema = z.object({
    brand: z.string().nonempty('Marca obrigatória').max(120, 'Máximo de 120 caracteres'),
    model: z.string().nonempty('Modelo obrigatório').max(300, 'Máximo de 300 caracteres'),
    year: z.string().nonempty('Ano obrigatório').max(80, 'Máximo de 80 caracteres'),
    fuel: z.string().nonempty('Combustível obrigatório').max(80, 'Máximo de 80 caracteres'),
    mileage: z.string().nonempty('Quilometragem obrigatória').max(20, 'Máximo de 20 caracteres'),
    color: z.string().nonempty('Cor obrigatória').max(120, 'Máximo de 120 caracteres'),
    fipe_price: z.string().nonempty('Preço da tabela FIPE obrigatória').max(20, 'Máximo de 20 caracteres'),
    price: z.string().nonempty('Preço obrigatório').max(20, 'Máximo de 20 caracteres'),
    description: z.string().nonempty('Descrição obrigatória').max(200, 'Máximo de 200 caracteres'),
    cover_image: z.string().nullish().default(null),
    is_active: z.boolean().default(true),
    image_one: z.string().nonempty('Imagem obrigatória'),
    image_two: z.string().nonempty('Imagem obrigatória'),
    image_three: z.string().nullish().default(null),
    image_four: z.string().nullish().default(null),
    image_five: z.string().nullish().default(null),
    image_six: z.string().nullish().default(null),
    image_seven: z.string().nullish().default(null),
    image_eigth: z.string().nullish().default(null),
    image_nine: z.string().nullish().default(null),
    image_ten: z.string().nullish().default(null)
})


export type iCreatePoster = z.infer<typeof createPosterSchema>

export { createPosterSchema }