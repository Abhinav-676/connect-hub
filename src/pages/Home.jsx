import Desc from '../components/Home/Desc'
import CardGrid from '../components/Home/CardGrid'
import Carousel from '../components/Home/Carousel'
import VideoCollage from '../components/Home/VideoCollage'
import Marquee from '../components/Marquee/Marquee'

function Home() {
    return (
        <>
        <Carousel />
        <Marquee />
        <Desc />
        <VideoCollage />
        <CardGrid />
        </>
    )
}

export default Home