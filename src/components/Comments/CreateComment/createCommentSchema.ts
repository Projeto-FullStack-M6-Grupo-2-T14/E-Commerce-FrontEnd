import { z } from "zod";

export const createCommentSchema = z.object({
    text: z.string().nonempty("Digite um comentário"),
    posterId: z.number()
});

export type TCreateCommentData = z.infer<typeof createCommentSchema>;