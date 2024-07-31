import ContactForm from "../components/Connect/ContactForm"
import LocationMap from "../components/Connect/LocationMap"
import Marquee from "../components/Marquee/Marquee"

function Connect() {
    return (
        <>
        <section className="flex flex-col items-center bg-grayblue pb-28 pt-16 px-2 bg-[url('https://img.freepik.com/free-photo/brown-watercolor-leaf-background-aesthetic-autumn-season_53876-129881.jpg?t=st=1722416624~exp=1722420224~hmac=92d1cf3bb2106da58be20b5ec87ae9f7f30db5aa9e7358fa505ab387410625da&w=1380')] bg-cover">
        <h2 className="text-4xl font-bold text-gray-900 pb-8 pl-4">We would love to connect with you</h2>
            <ContactForm />
        </section>
        {/* <section>
            <Marquee />
        </section>
        <section>
            <LocationMap />
        </section> */}
        </>
    )
}

export default Connect