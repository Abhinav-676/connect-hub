function ContentSection({title, children}) {
    return (
        <section className="my-20">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 pl-4">
                {title}
            </h2>
            <div className="flex justify-center align-center">
                {children}
            </div>
        </section>
    )
}

export default ContentSection