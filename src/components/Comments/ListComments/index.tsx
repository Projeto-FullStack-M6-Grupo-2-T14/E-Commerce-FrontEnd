import { TComment } from "../../DetailPoster/schemas"




const ListComments = ({comment}: { comment: TComment }) => {
  return (
    <div>
      <div>
        <h3 className="heading-6-600">{comment.user.name}</h3>
      </div>
      <div>
        <p className="heading-7-600">{comment.text}</p>
      </div>
    </div>
  )
}

export default ListComments