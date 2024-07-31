function Section({className,children}) {
    return (
        <section className={`my-28 max-w-screen-xl overflow-hidden mx-auto ${className}`}>
            {children}
        </section>
    )
}

export default Section