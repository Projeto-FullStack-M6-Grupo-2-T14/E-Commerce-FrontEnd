import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TCreateCommentData, createCommentSchema } from "./createCommentSchema";
import { ApiShop } from "src/services/Api";
import { useCallback, useContext } from "react";
import { PosterContext } from "src/contexts/posterContext";

const CreateComment = ({posterId }: { posterId: number }) => {
    const { comments, setComments } = useContext(PosterContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: zodResolver(createCommentSchema),
    });


    const createComment = useCallback(async () => {
        const data: TCreateCommentData = {
            posterId,
            text: getValues("text"),
        };

        try {
            const token = localStorage.getItem('@TOKEN')
            const response = await ApiShop.post("/comments", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setComments([
                ...comments,
                response.data
            ])
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }, [posterId, getValues]);

    return (
        <section>
            <form onSubmit={handleSubmit(createComment)}>
                <div>
                    <h2>Samuel leão</h2>
                </div>
                <div>
                    <textarea
                        id=""
                        placeholder="Digite seu comentario aqui..."
                        {...register("text")}
                    ></textarea>
                    <input type="hidden" {...register("posterId", { value: posterId })}/>
                    <button type="submit">Comentar</button>
                </div>
                <div></div>
            </form>
        </section>
    );
};

export default CreateComment;
