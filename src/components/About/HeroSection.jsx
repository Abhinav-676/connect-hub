import Section from "../Section"

function AboutHeroSection() {
    return (
        <Section className="mt-4">
        <div className="h-[40vh] rounded-lg flex justify-center items-center bg-center bg-[url('https://static1.squarespace.com/static/594128453a0411e6863800e7/5b505e3f0e2e72f3e4cd617d/5e7cc59072887b4f41427512/1585236103648/perry-grone-732606-unsplash.jpg?format=1500w')]">
            <h1 className="text-7xl font-bold text-gray-100"><span>Together</span> <span>We Can</span></h1>
        </div>
        </Section>
    )
}

export default AboutHeroSection