import Section from "../Section"

function ContentSection({title, children}) {
    return (
        <Section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 pl-4">
                {title}
            </h2>
            <div className="flex justify-center align-center text-lg">
                {children}
            </div>
        </Section>
    )
}

export default ContentSection