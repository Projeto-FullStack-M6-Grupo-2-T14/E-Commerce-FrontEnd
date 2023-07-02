import { z } from "zod";

const addressSchema = z.object({
  zipcode: z.string().nonempty("O CEP é obrigatório"),
  state: z.string().nonempty("O estado é obrigatório"),
  city: z.string().nonempty("A cidade é obrigatória"),
  street: z.string().nonempty("A rua é obrigatória"),
  number: z.string().nonempty("O número é obrigatória"),
  complement: z.string().nonempty("O complemento é obrigatória"),
});

export const registerFormSchema = z.object({
  name: z.string().min(3, "O nome precisa conter pelo menos 3 caracteres.").nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
  cpf: z.string().nonempty("O CPF é obrigatório"),
  phone: z.string().max(14, "O telefone deve ter no máximo 14 caracteres").nonempty("O número do celular é obrigatório"),
  birthday: z.string().nonempty("Data de Nascimento é obrigatória"),
  description: z.string().nonempty(),
  is_seller: z.boolean().default(false),
  password: z.string()
    .min(8, "A senha precisa conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
  password_confirm: z.string().nonempty("A confirmação da senha é obrigatória"),
  address: addressSchema,
}).refine((data) => data.password === data.password_confirm, {
  message: "As senhas devem ser iguais!",
  path: ["password_confirm"], 
  
});


export type TRegisterData = z.infer<typeof registerFormSchema>;