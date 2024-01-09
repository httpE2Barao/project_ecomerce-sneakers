import { useState } from "react"
import { ProductInfo } from "./info";

export const ProductPoster = () => {

    const [isOpen, setIsOpen] = useState(true)
    const isMobile = window.innerWidth <= 768;

    const [cont, setCont] = useState(1)
    const totalImages = 4;

    const nextImage = () => {
        setCont((cont % totalImages) + 1)
    }
    const prevImage = () => {
        setCont(((cont + totalImages - 2) % totalImages) + 1)
    }

    return (
        <article className="flex flex-col 
        lg:flex-row lg:h-screen lg:my-auto lg:p-10 lg:items-center lg:pb-[140px]">

            <section>
                <div className="relative flex flex-row w-full items-center z-2 lg:w-[500px] lg:mx-10">
                    <img onClick={() => prevImage()} src="./images/icon-previous.svg" className="lg:hidden absolute left-0 mx-4 bg-white py-4 px-5 rounded-full hover:cursor-pointer" alt="Anterior" />

                    <img onClick={() => {if (isMobile) setIsOpen(!isOpen)}} className={`sm:w-full lg:rounded-3xl lg:h-[450px] ${isOpen ? '' : 'md:h-96 object-cover'} ${cont == 2 || cont == 3 ? 'object-top' : 'object-center'}`} src={`./images/image-product-${cont}.jpg`} alt="Imagem do Tênis" />

                    <img onClick={() => nextImage()} src="./images/icon-next.svg" className="lg:hidden absolute right-0 mx-4 bg-white py-4 px-5 rounded-full hover:cursor-pointer" alt="Próximo" />
                </div>
                <div>
                    {/* banners images */}
                </div>
            </section>

            <ProductInfo />

        </article>
    )
}