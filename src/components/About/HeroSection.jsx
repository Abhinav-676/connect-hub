import Section from "../Section"

function AboutHeroSection() {
    return (
        <Section className="mt-4">
        <div className="h-[40vh] rounded-lg flex justify-center items-center bg-center bg-[url('https://img.freepik.com/free-photo/scene-from-care-job-with-senior-patient-being-take-care_23-2151224164.jpg?t=st=1722361081~exp=1722364681~hmac=f06ac16ffd565f7cb98cd9b0297731e15791f53d604937d6d05e3622ff7ccd5c&w=1380')]">
            <h1 className="text-8xl font-bold text-gray-100"><span>Together</span> <span>We Can</span></h1>
        </div>
        </Section>
    )
}

export default AboutHeroSection