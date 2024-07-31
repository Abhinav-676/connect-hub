function Section({className,children}) {
    return (
        <section className={`my-28 max-w-screen-xl rounded-lg overflow-hidden mx-auto ${className}`}>
            {children}
        </section>
    )
}

export default Section