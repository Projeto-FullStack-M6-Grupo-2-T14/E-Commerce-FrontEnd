import Header from 'src/components/home/Header'
import styles from './detailPoster.module.sass'
import { useContext, useEffect, useState } from 'react'
import { ApiShop } from 'src/services/Api'
import Comment from 'src/components/Comments/ListComments'
import DetailPoster from 'src/components/DetailPoster'
import CreateComment from 'src/components/Comments/CreateComment'
import { PosterContext } from 'src/contexts/posterContext'


const DetailPosterPage = () => {
    const {  posterData, setPosterData, comments, setComments  } = useContext(PosterContext)
    const [ posterId, setPosterId ] = useState<number>(0)
    useEffect(() => {
        const getPosterData = async () => {
            try {
                const response = await ApiShop.get('/posters/28')
                setPosterData(response.data)
                setComments(response.data.comments)
                setPosterId(response.data.id)
            } catch (error) {
                console.error(error)
            }
        }
        getPosterData()
    },[setPosterData, setComments])

    return (
        <>
            <Header />
            <main className={styles.detpostMain}>
                <div className={styles.detpostContainer}>
                    <div className={styles.detpostLeftContainer}>
                        {posterData !== null && <DetailPoster posterData={posterData} />}
                        <div className={styles.detpostComments}>
                            <h2 className='heading-4-600'>Comentários</h2>
                            {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
                        </div>
                        <CreateComment posterId={posterId}/>
                    </div>
                    <div className={styles.detpostRightContainer}>
                        <div className={styles.detpostOtherImgs}></div>
                        <div className={styles.detpostSellerInfo}></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DetailPosterPage