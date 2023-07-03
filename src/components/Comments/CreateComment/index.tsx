import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TCreateCommentData, createCommentSchema } from "./createCommentSchema"
import { ApiShop } from "src/services/Api"
import { useCallback, useContext, useEffect, useState } from "react"
import { PosterContext } from "src/contexts/posterContext"
import styles from './createComment.module.sass'
import { useNavigate } from "react-router-dom"


const CreateComment = ({posterId }: { posterId: number }) => {
    const { comments, setComments } = useContext(PosterContext)
    const [ loggedUserName, setLoggedUserName ] = useState('')
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        getValues,
        reset
    } = useForm({
        resolver: zodResolver(createCommentSchema),
    })
    const retrieveUserName = async (userId: number) => {
        try {
        const response = await ApiShop.get(`/users/${userId}`)
        setLoggedUserName(response.data.name)
        } catch (error) {
        console.log(error)
        }
    }

    useEffect(() => {
        const userId = localStorage.getItem('@USER_ID')
        if(userId) {
            const numberId = parseInt(userId)
            retrieveUserName(numberId)
        }
    }, [loggedUserName])

    const createComment = useCallback(async () => {
        const data: TCreateCommentData = {
            posterId,
            text: getValues("text"),
        }

        try {
            const token = localStorage.getItem('@TOKEN')
            if(!token){
                navigate('/')
            }
            const response = await ApiShop.post(`/comments/${posterId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            setComments([
                ...comments,
                response.data
            ])
            reset()
        } catch (error) {
            console.error(error)
        }
    }, [posterId, getValues, comments, reset])
    function generateColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'
    
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
    
        return color
    }

    const userName = loggedUserName

    function generateNameImg() {
    let initials = ""

    const nameParts = userName.split(' ')

    for (let i = 0; i < nameParts.length; i++) {
        const namePart = nameParts[i]
        if (namePart.length > 0) {
        initials += namePart[0]
        }
    }

    return initials;
    }

    return (
        <section className={styles.createCommentContainer}>
            <form className={styles.createCommentWrapper} onSubmit={handleSubmit(createComment)}>
                <div className={styles.createCommentName}>
                    <figure>
                        <div style={{ 'backgroundColor': `${generateColor()}` }} className='heading-7-500'>{`${generateNameImg()}`}</div>
                        <figcaption className='body-2-500'>
                            <h2 className="heading-7-600">{loggedUserName}</h2>
                        </figcaption>
                    </figure>
                </div>
                <div className={styles.cCommentTareaWrapper}>
                    <textarea className={styles.cCommentTarea}
                        id=""
                        placeholder="Digite seu comentario aqui..."
                        {...register("text")}
                    ></textarea>
                    <input type="hidden" {...register("posterId", { value: posterId })}/>
                    <button className={styles.cCommentButton} type="submit">Comentar</button>
                </div>
            </form>
        </section>
    )
}

export default CreateComment
