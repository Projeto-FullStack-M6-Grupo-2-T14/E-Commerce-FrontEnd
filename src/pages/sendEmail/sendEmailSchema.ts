import { z } from "zod";

export const sendEmailSchema = z.object({
  email: z.string().email("digite um email válido").nonempty("esse Campo é obrigatório"),    
  });

export type TSendEmail = z.infer<typeof sendEmailSchema>;