import ContactForm from "../components/Connect/ContactForm"
import LocationMap from "../components/Connect/LocationMap"
import Marquee from "../components/Marquee/Marquee"
import Section from "../components/Section"

function Connect() {
    return (
        <>
        <Section className="mt-4 bg-[url('https://img.freepik.com/free-photo/brown-watercolor-leaf-background-aesthetic-autumn-season_53876-129881.jpg?t=st=1722416624~exp=1722420224~hmac=92d1cf3bb2106da58be20b5ec87ae9f7f30db5aa9e7358fa505ab387410625da&w=1380')] bg-cover">
            <div className="flex flex-col items-center py-16 px-8">
                <h2 className="text-4xl font-bold text-gray-900 pb-8 pl-4">We would love to connect with you</h2>
                <ContactForm />
            </div>
        </Section>
        <Section>
            <Marquee/>
        </Section>
        <Section>
            <LocationMap/>
        </Section>
        </>
    )
}

export default Connect