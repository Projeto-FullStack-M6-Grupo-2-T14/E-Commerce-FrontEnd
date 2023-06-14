import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(3, "O nome precisa conter pelo menos 3 caracteres.").nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
  cpf: z.string().nonempty("O CPF é obrigatório"),
  phone: z.string().max(14, "O telefone deve ter no máximo 14 caracteres").nonempty("O número do celular é obrigatório"),
  birthdate: z.string().nonempty("Data de Nascimento é obrigatória"),
  description: z.string().nullable(),
  cep: z.string().nonempty("O CEP é obrigatório"),
  state: z.string().nonempty("O estado é obrigatório"),
  city: z.string().nonempty("A cidade é obrigatório"),
  street: z.string().nonempty("A rua é obrigatória"),
  number: z.string().nullable(),
  complement: z.string().nullable(),
  password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
  password_confirm: z.string().nonempty("A confirmação da senha é obrigatória"),
}).refine((data) => data.password === data.password_confirm, {
  message: "As senhas devem ser iguais!",
  path: ["password_confirm"], 
});

export type TRegisterData = z.infer<typeof registerFormSchema>;