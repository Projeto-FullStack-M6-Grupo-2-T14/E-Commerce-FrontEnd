import { z } from "zod";

export const newPassSchema = z.object({
  newPass: z.string().nonempty("esse Campo é obrigatório"),
  confirmNewPass: z.string().nonempty("esse Campo é obrigatório")
}).refine((data) => data.newPass === data.confirmNewPass, {
    message: "As senhas devem ser iguais!",
    path: ["confirmNewPass"], 
    
  });

export type TNewPass = z.infer<typeof newPassSchema>;