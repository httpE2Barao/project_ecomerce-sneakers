import { useState } from "react"

export const ProductPoster = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [cont, setCont] = useState(1)
    const totalImages = 4;

    const nextImage = () => {
        setCont((cont % totalImages) + 1)}
    const prevImage = () => {
        setCont(((cont + totalImages - 2) % totalImages) + 1)}

    return (
        <article className="flex flex-col">

            <section className="relative flex flex-row w-full items-center z-2">
                <img onClick={() => prevImage()} src="./images/icon-previous.svg" className="absolute left-0 mx-4 bg-white py-4 px-5 rounded-full hover:cursor-pointer" alt="Anterior" />

                <img onClick={() => setIsOpen(!isOpen)} className={`w-full ${isOpen ? '' : 'h-96 object-cover'} ${cont == 2 || cont == 3? 'object-top' : 'object-center'}`} src={`./images/image-product-${cont}.jpg`} alt="Imagem do Tênis" />

                <img onClick={() => nextImage()} src="./images/icon-next.svg" className="absolute right-0 mx-4 bg-white py-4 px-5 rounded-full hover:cursor-pointer" alt="Próximo" />
            </section>

        </article>
    )
}