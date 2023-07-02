import { z } from "zod";

export const anuncioFormSchema = z.object({
  brand: z.string().nonempty("A marca é obrigatória"),
  model: z.string().nonempty("A marca é obrigatória"),
  year: z.string().nonempty("A marca é obrigatória"),
  fuel: z.string().nonempty("A marca é obrigatória"),
  mileage: z.string().nonempty("A marca é obrigatória"),
  color: z.string().nonempty("A marca é obrigatória"),
  fipePrice: z.string().nonempty("A marca é obrigatória"),
  price: z.string().nonempty("A marca é obrigatória"),
  description: z.string().nonempty("A marca é obrigatória"),
  coverImage: z.string(),
  galeryImage: z.string()
});

export type TAnuncioData = z.infer<typeof anuncioFormSchema>;