function SectionContentGenerator({paragraphs}) {
    return (
        <div className="max-w-6xl pt-8 px-8">
            {paragraphs.map((item, index) => (
                <p className="mb-2 text-gray-800" key={index}>{item}</p>
            ))}
        </div>
    )
}

export default SectionContentGenerator