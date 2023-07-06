import { Link } from "react-router-dom"
import { TComment } from "../../DetailPoster/schemas"
import styles from './listComments.module.sass'
import { ApiShop } from "src/services/Api"
import { useContext, useState, useMemo } from "react"
import { PosterContext } from "src/contexts/posterContext"
import { FiEdit, FiTrash2 } from "react-icons/fi"


const ListComments = ({comment}: { comment: TComment }) => {
  const { setComments, posterId } = useContext(PosterContext)
  const [ showEditModal, setShowEditModal ] = useState(false)
  const [editedText, setEditedText] = useState(comment.text)
  const storedUserId = localStorage.getItem("@USER_ID");

  const generateColor = useMemo(() => {
    const letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }, [])

  const userName = comment.user.name

  function generateNameImg() {
    let initials = ""

    const nameParts = userName.split(' ')

    for (let i = 0; i < nameParts.length; i++) {
      const namePart = nameParts[i]
      if (namePart.length > 0) {
        initials += namePart[0]
      }
    }

    return initials
  }
  const commentDate = () => {
    const dateString: string = comment.created_at
    const dateCommented = new Date(dateString)
    const currentDate = new Date()
    const differenceInMiliseconds = currentDate.getTime() - dateCommented.getTime()
    const timeDifference = Math.floor(differenceInMiliseconds / (1000 * 60 * 60 * 24))
    if(timeDifference < 1) {
      return `- hoje`
    } else if (timeDifference === 1) {
      return '- ontem'
    } else {
      return `- há ${timeDifference} dias`
    }
  }
  const editComment = () => {
    setShowEditModal(!showEditModal)
    console.log(comment.user.id)
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedText(event.target.value)
  }
  const getComments = async () => {
    try {
      const token = localStorage.getItem('@TOKEN')
      const response = await ApiShop.get(`comments/${posterId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setComments(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const saveEditedComment = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('@TOKEN')
      await ApiShop.patch(`comments/${comment.id}`, {
        text: editedText
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      getComments()
      editComment()
    } catch (error) {
      console.error(error)
    }
  }

  const deleteComment = async (commentId: number) => {
    try {
      const token = localStorage.getItem('@TOKEN')
      await ApiShop.delete(`comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      getComments()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.commentContainer}>
      <div className={styles.titleContainer}>
        <figure>
          <div style={{ 'backgroundColor': generateColor }} className='heading-7-500'>{`${generateNameImg()}`}</div>
            <figcaption className='body-2-500'>
                <Link to={`/profile/seller?seller_id=${comment.user.id}`}>{userName}</Link>
            </figcaption>
          <span className={styles.commentDate}>{commentDate()}</span>
        </figure>
        {storedUserId === String(comment.user.id) ? 
        <div className={styles.titleBtnContainer}>
        <button onClick={editComment}><FiEdit /></button>
        <button onClick={() => deleteComment(comment.id)}><FiTrash2 /></button>
      </div> 
      : null}
          

      
      </div>
      <div className={styles.commentText}>
        {
          !showEditModal
          ? <p className="body-2-400">{comment.text}</p>
          : <>
              <form className={styles.editForm}>
                <textarea className={`${styles.editComment} body-2-400`} id="" defaultValue={comment.text} onChange={handleTextareaChange}/>
                <div className={styles.editBtnsContainer}>
                  <button onClick={editComment}>cancelar</button>
                  <button onClick={saveEditedComment}>salvar</button>
                </div>
              </form>
            </>
          
        }
        
      </div>
    </div>
  )
}

export default ListComments