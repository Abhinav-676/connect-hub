import ContactForm from "../components/Connect/ContactForm"
import LocationMap from "../components/Connect/LocationMap"
import Marquee from "../components/Marquee/Marquee"

function Connect() {
    return (
        <>
        <section className="flex flex-col items-center bg-grayblue pb-28 pt-16 px-2 bg-[url('https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?t=st=1722275735~exp=1722279335~hmac=6ec8053388679e7acbe46bf85dcc079039da91595ebadd42dbf3839af859f75d&w=1380')] bg-cover">
        <h2 className="text-4xl font-bold text-gray-100 pb-8 pl-4">Contact Us</h2>
            <ContactForm />
        </section>
        <section>
            <Marquee />
        </section>
        <section>
            <LocationMap />
        </section>
        </>
    )
}

export default Connect