"use client";
import { MenuProps } from "../page";

export const Header = ({ isOpen, setIsOpen }: MenuProps) => {
    return (
        <header className='p-6 flex justify-between'>

            <nav className='flex flex-row items-center gap-4'>
                <div className={`hover:cursor-pointer`} onClick={() => setIsOpen(!isOpen)}><img src="./images/icon-menu.svg" alt="Abrir/Fechar Menu" /></div>
                <img src='./images/logo.svg' alt="Sneakers Logo" />
            </nav>

            <nav className='flex flex-row items-center gap-4'>
                <img className="w-7 h-w-7 hover:cursor-pointer" src="./images/icon-cart.svg" alt="Ver Carrinho" />
                <img className="w-8 hover:cursor-pointer" src="./images/image-avatar.png" alt="Perfil" />
            </nav>

        </header>
    )
}
