"use client";
import { MenuProps } from "../page";
import { ItensMenu } from "../page";

export const Header = ({ isOpen, setIsOpen }: MenuProps) => {
    return (
        <header className='p-6 flex justify-between lg:py-10 lg:border-b'>

            <nav className='flex flex-row items-center gap-4'>
                <div className={`hover:cursor-pointer lg:hidden`} onClick={() => setIsOpen(!isOpen)}><img src="./images/icon-menu.svg" alt="Abrir/Fechar Menu" /></div>
                <img src='./images/logo.svg' alt="Sneakers Logo" />

                {ItensMenu.map((item, index) => (
                    <li key={index} className="hidden lg:block ml-14 text-lg text-gray-400 hover:cursor-pointer">{item}</li>
                ))}
            </nav>

            <nav className='flex flex-row items-center gap-4 lg:gap-7'>
                <img className="w-7 h-w-7 hover:cursor-pointer lg:w-8" src="./images/icon-cart.svg" alt="Ver Carrinho" />
                <img className="w-8 hover:cursor-pointer lg:w-12" src="./images/image-avatar.png" alt="Perfil" />
            </nav>

        </header>
    )
}
