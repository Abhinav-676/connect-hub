import Desc from '../components/Home/Desc'
import Programmes from '../components/Home/Programmes'
import Carousel from '../components/Home/Carousel'
import Organisations from '../components/Home/Organisations'
import VideoCollage from "../components/Home/VideoCollage"
import Section from '../components/Section'
import HeroSection from '../components/HeroSection'

function Home() {
    return (
        <>
        {/* <Carousel /> */}
        <HeroSection img="https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_960_720.jpg" title="Connect Hub"/>
        <Desc />
        <Organisations />
        <VideoCollage />
        <Programmes />
        </>
    )
}

export default Home