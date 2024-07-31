import Desc from '../components/Home/Desc'
import Programmes from '../components/Home/Programmes'
import Carousel from '../components/Home/Carousel'
import Organisations from '../components/Home/Organisations'
import VideoCollage from "../components/Home/VideoCollage"

function Home() {
    return (
        <>
        <Carousel />
        <Desc />
        <Organisations />
        <VideoCollage />
        <Programmes />
        </>
    )
}

export default Home