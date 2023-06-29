import { Context, Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"
import { ApiShop } from "src/services/Api"
import { AxiosError } from "axios"
import { z } from 'zod'
import { iCreatePoster } from "src/components/profile/Modals/modalCreate/modalCreate.schema"
import { iUpdatePoster } from "src/components/profile/Modals/modalUpdate/modalUpdate.schema"


interface IPosterProviderProps {
  children: ReactNode
}

interface IPosterContext {
  getPosters: () => Promise<void>
  filteredPosters: TPosterCardList | []
  setFilteredPosters: Dispatch<SetStateAction<TPosterCardList>>
  allPosters: TAllPosterList | []
  setAllPosters: Dispatch<SetStateAction<TAllPosterList>>
  createPosterAndImgs: (data: iCreatePoster) => Promise<void>;
  updatePosterAndImgs: (data: iUpdatePoster, idCard: string) => Promise<void>;
  excludePoster: (id: string) => Promise<void>;
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


  // const getAllUsersPosters = async (): Promise<void> => {
  //   try {
  //     const response = await ApiShop.get(`/users/posters/${seller?.id}`)
  //     const postersList = posterCardListSchema.parse(response.data)

  //     console.log(postersList)

  //     setFilteredPosters(postersList)
  //   } catch (error) {
  //     const axiosError = error as AxiosError
  //     console.error(axiosError.message)
  //   }
  // }


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

  const createPosterAndImgs = async (data: iCreatePoster) => {
    const token = localStorage.getItem('@TOKEN')

    try {
      const posterData = {
        ...data
      }
      const dataKeys = Object.keys(data)
      const dataValues = Object.values(data)

      dataKeys.forEach(async (img, index) => {
        if (img.includes('image') && !img.includes('cover_image')) {
          const img = {
            image: dataValues[index]
          }

          await ApiShop.post('/image', img, {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
        }
      })
      await ApiShop.post('/posters', posterData, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
    }
    catch (error) { console.log(error) }
  }

  const updatePosterAndImgs = async (data: iUpdatePoster, idCard: string) => {
    const token = localStorage.getItem("@TOKEN")

    try {
      const obj = {
        brand: data.brand,
        model: data.model,
        year: data.year,
        fuel: data.fuel,
        mileage: data.mileage,
        color: data.color,
        fipe_price: data.fipe_price,
        price: data.price,
        description: data.description,
        cover_image: data.cover_image,
        is_active: data.is_active,
      }
      const dataPoster = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(obj).filter(([_, v]) => v != null && v !== "")
      );

      await ApiShop.patch(`/posters/${idCard}`, dataPoster, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      const dataKeys = Object.keys(data)
      const dataValues = Object.values(data)

      dataKeys.forEach(async (img, index) => {
        if (img.includes('image') && !img.includes('cover_image')) {
          const img = {
            image: dataValues[index]
          }

          await ApiShop.patch(`/image/${idCard}`, img, {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
        }
      })

    }
    catch (err) { console.log(err) }
  }

  const excludePoster = async (id: string) => {
    const token = localStorage.getItem("@TOKEN")

    await ApiShop.delete(`/posters/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return (
    <PosterContext.Provider
      value={{
        getPosters,
        filteredPosters,
        setFilteredPosters,
        allPosters,
        setAllPosters,
        createPosterAndImgs,
        updatePosterAndImgs,
        excludePoster
      }} >
      {children}
    </PosterContext.Provider>
  )
}

export default PosterProvider