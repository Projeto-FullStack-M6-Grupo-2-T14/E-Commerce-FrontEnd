import { Context, Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
import { ApiShop } from "src/services/Api"
import { AxiosError } from "axios"
import { z } from 'zod'


interface IPosterProviderProps {
    children: ReactNode
}

interface IPosterContext {
    getPosters: () => Promise<void>
    filteredPosters: TPosterCardList | []
    setFilteredPosters: Dispatch<SetStateAction<TPosterCardList>>
    allPosters: TAllPosterList | []
    setAllPosters: Dispatch<SetStateAction<TAllPosterList>>
}

export type TPosterCardList = z.infer<typeof posterCardListSchema>
const posterCardUserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    phone: z.string(),
    birthday: z.string(),
    description: z.string(),
    is_seller: z.boolean()
})
export type TPosterUser = z.infer<typeof posterCardUserSchema>
const posterCardSchema = z.object({
    cover_image: z.string(),
    title: z.string(),
    description: z.string(),
    user: posterCardUserSchema,
    mileage: z.string(),
    year: z.string(),
    price: z.string(),
})

export type TAllPosterUser = z.infer<typeof allPosterUserSchema>

const allPosterUserSchema = z.object({
    name: z.string().max(100),
    email: z.string().max(60),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false),
})

export type TAllPoster = z.infer<typeof allPosterSchema>
export type TAllPosterList = TAllPoster[]
const allPosterSchema = z.object({
    id: z.number(),
    title: z.string().max(120),
    brand: z.string().max(120),
    model: z.string().max(300),
    year: z.string().or(z.date()),
    fuel: z.string().max(80),
    mileage: z.string().max(20),
    color: z.string().max(120),
    fipe_price: z.string().max(20),
    price: z.string().max(20),
    description: z.string().max(200),
    cover_image: z.string().nullish(),
    is_active: z.boolean().default(false),
    created_at: z.string(),
    user: allPosterUserSchema
})

const posterCardListSchema = z.array(posterCardSchema)

export const PosterContext: Context<IPosterContext> = createContext({} as IPosterContext)

const PosterProvider = ({ children }: IPosterProviderProps) => {
    const [filteredPosters, setFilteredPosters] = useState<TPosterCardList>([])
    const [loadPosters, setLoadPosters] = useState(true)
    const [allPosters, setAllPosters] = useState<TAllPosterList>([])

    const getPosters = async (): Promise<void> => {
        try {
            const response = await ApiShop.get('/posters')
            setAllPosters(response.data)
            const postersList = posterCardListSchema.parse(response.data)
            if (filteredPosters.length === 0 && !loadPosters) {
                setFilteredPosters(postersList)
                setLoadPosters(false)
            }
            setFilteredPosters(postersList)
        } catch (error) {
            const axiosError = error as AxiosError
            console.error(axiosError.message)
        }
    }

    return (
        <PosterContext.Provider value={{ getPosters, filteredPosters, setFilteredPosters, allPosters, setAllPosters }} >
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider