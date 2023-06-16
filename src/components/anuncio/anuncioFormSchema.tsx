import { z } from "zod";

export const anuncioFormSchema = z.object({
  marca: z.string().nonempty("A marca é obrigatória"),
  modelo: z.string().nonempty("A marca é obrigatória"),
  ano: z.string().nonempty("A marca é obrigatória"),
  combustivel: z.string().nonempty("A marca é obrigatória"),
  quilometragem: z.string().nonempty("A marca é obrigatória"),
  cor: z.string().nonempty("A marca é obrigatória"),
  precoFipe: z.string().nonempty("A marca é obrigatória"),
  preco: z.string().nonempty("A marca é obrigatória"),
  descricao: z.string().nonempty("A marca é obrigatória"),
  imagemCapa: z.string(),
  imagemGaleria: z.string()
});

export type TAnuncioData = z.infer<typeof anuncioFormSchema>;