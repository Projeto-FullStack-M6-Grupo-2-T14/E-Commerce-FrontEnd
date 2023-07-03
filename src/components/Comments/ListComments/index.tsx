import { Link } from "react-router-dom"
import { TComment } from "../../DetailPoster/schemas"
import styles from './listComments.module.sass'



const ListComments = ({comment}: { comment: TComment }) => {
  function generateColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }

  const userName = comment.user.name;

  function generateNameImg() {
    let initials = "";

    const nameParts = userName.split(' ');

    for (let i = 0; i < nameParts.length; i++) {
      const namePart = nameParts[i];
      if (namePart.length > 0) {
        initials += namePart[0];
      }
    }

    return initials;
  }
  const commentDate = () => {
    const dateString: string = comment.created_at
    const dateCommented = new Date(dateString)
    const currentDate = new Date()
    const differenceInMiliseconds = currentDate.getTime() - dateCommented.getTime()
    const timeDifference = Math.floor(differenceInMiliseconds / (1000 * 60 * 60 * 24))
    if(timeDifference < 1) {
      return `- hoje`
    } else {
      return `- há ${timeDifference} dias`
    }
  }

  return (
    <div className={styles.commentContainer}>
        <figure>
          <div style={{ 'backgroundColor': `${generateColor()}` }} className='heading-7-500'>{`${generateNameImg()}`}</div>
            <figcaption className='body-2-500'>
                <Link to={`/profile/seller?seller_id=${comment.user.id}`}>{userName}</Link>
            </figcaption>
        <span className={styles.commentDate}>{commentDate()}</span>
        </figure>
      <div className={styles.commentText}>
        <p className="body-2-400">{comment.text}</p>
      </div>
    </div>
  )
}

export default ListComments