import Link from "next/link"

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href='/news/next-js-is-awesome'>
                        next js is awesome
                    </Link> 
                </li>
                <li>
                    <Link href='/news/next-js-is-optimised'>
                        next js is optimised
                    </Link> 
                </li>
            </ul>
        </>
    )
}

export default NewsPage