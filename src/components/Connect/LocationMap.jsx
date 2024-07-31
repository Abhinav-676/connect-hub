import { useEffect, useState } from "react"

function LocationMap() {
    const [width, changeWidth] = useState(window.innerWidth)
    const [height, changeHeight] = useState(350)

    useEffect(() => {
        window.addEventListener('resize', ()=> {
            const newWidth = window.innerWidth
            changeWidth(newWidth)
        })
    }, [])

    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17115.580131665585!2d85.44266403222417!3d23.32862282247238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1722264947583!5m2!1shi!2sin" width={width} height={height} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    )
}

export default LocationMap