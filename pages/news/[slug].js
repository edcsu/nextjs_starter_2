import { useRouter } from "next/router"

const NewsDetail = () => {
    const router =  useRouter()
    const slug = router.query.slug
    return (
        <>
            <h1> Details page</h1>
            <p>{slug}</p>
        </>
    )
}

export default NewsDetail