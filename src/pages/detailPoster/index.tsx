/* eslint-disable react-hooks/exhaustive-deps */
import styles from './detailPoster.module.sass'
import { useContext, useEffect, useState } from 'react'
import { ApiShop } from 'src/services/Api'
import Comment from 'src/components/Comments/ListComments'
import DetailPoster from 'src/components/DetailPoster'
import CreateComment from 'src/components/Comments/CreateComment'
import { PosterContext } from 'src/contexts/posterContext'
import photos from './../../assets/images/Frame 41.png'
import SellerInfo from 'src/components/SellerInfo'
import { TSellerInfo } from 'src/components/SellerInfo/sellerInfo.schemas'
import { useParams } from 'react-router-dom'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { UserContext } from 'src/contexts/userContext'

const DetailPosterPage = () => {
    const emptySeller = {
        id: '',
        name: '',
        description: ''
    }
    const [loading, setLoading] = useState(true)
    const { posterData, setPosterData, comments, setComments, posterId, setPosterId } = useContext(PosterContext)
    const { user } = useContext(UserContext)
    const [sellerInfo, setSellerInfo] = useState<TSellerInfo>(emptySeller)
    const params = useParams()

    useEffect(() => {
        const getPosterData = async () => {
            try {
                const response = await ApiShop.get(`/posters/${params.id}`)
                setPosterData(response.data)
                setComments(response.data.comments)
                setPosterId(response.data.id)
                setSellerInfo(response.data.user)

                setLoading(false)

            } catch (error) {
                console.error(error)
            }
        }
        getPosterData()
    }, [setPosterData, setComments, posterId, setPosterId])



    return (
        <div>
            {loading ? (
                <div>LOADING...</div>
            ) : (
                <>
                    <Header />
                    <div className={styles.blueBackground}>TESTE</div>
                    <main className={styles.detpostMain}>
                        <div className={styles.detpostContainer}>
                            <div className={styles.detpostLeftContainer}>
                                {posterData && <DetailPoster posterData={posterData} />}
                                <div className={styles.detpostComments}>
                                    <div className={styles.commentsTitle}>
                                        <h2 className="heading-6-600">Comentários</h2>
                                    </div>
                                    {comments.map((comment) => (
                                        <Comment key={comment.id} comment={comment} />
                                    ))}
                                </div>
                                {
                                    user &&
                                    <CreateComment posterId={posterId} />
                                }
                            </div>
                            <div className={styles.detpostRightContainer}>
                                <div className={styles.detpostOtherImgs}>
                                    <img className={styles.otherImgs} src={photos} alt="" />
                                </div>
                                <div className={styles.detpostSellerInfo}>
                                    <SellerInfo sellerInfo={sellerInfo} />
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );

}

export default DetailPosterPage