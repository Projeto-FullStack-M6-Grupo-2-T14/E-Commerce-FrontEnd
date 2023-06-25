import { Context, Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { ApiShop } from "src/services/Api";
import { AxiosError } from "axios";
import { z } from 'zod'


interface IPosterProviderProps {
    children: ReactNode
}

interface IPosterContext {
    getPosters: () => Promise<void>
    filteredPosters: TPosterCardList | []
    setFilteredPosters: Dispatch<SetStateAction<TPosterCardList>>
}

type TPosterCardList = z.infer<typeof posterCardListSchema>
export const PostUserSchema = z.object({
    name: z.string(),
    email: z.string(),
    cpf: z.string(),
    phone: z.string(),
    birthday: z.string(),
    description: z.string(),
    is_seller: z.boolean()
})
export type TPostUserSchema = z.infer<typeof PostUserSchema>
const posterCardSchema = z.object({
    cover_image: z.string(),
    title: z.string(),
    description: z.string(),
    user: PostUserSchema,
    mileage: z.string(),
    year: z.string(),
    price: z.string(),
})

const posterCardListSchema = z.array(posterCardSchema)

export const PosterContext: Context<IPosterContext> = createContext({} as IPosterContext)

const PosterProvider = ({children}: IPosterProviderProps) => {
    const [ filteredPosters, setFilteredPosters ] = useState<TPosterCardList>([])
    const [ loadPosters, setLoadPosters ] = useState(true)
    
    const getPosters = async (): Promise<void> => {
        try {
            const response = await ApiShop.get('/posters')
            console.log(response.data)
            const postersList = posterCardListSchema.parse(response.data)
            if (filteredPosters.length === 0 && !loadPosters) {
                setFilteredPosters(postersList)
                setLoadPosters(false)
            }
            setFilteredPosters(postersList)
            console.log(postersList, 'pl')
        } catch (error) {
            const axiosError = error as AxiosError
            console.error(axiosError.message)
        }
    }

    return (
        <PosterContext.Provider value={{getPosters, filteredPosters, setFilteredPosters}} >
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider