"use client";
import { MenuProps } from "../page";
import { ItensMenu } from "../page";

export const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
    return (
        <>
            <section>
            <nav className={`flex flex-col fixed top-0 left-0 bg-white h-screen w-7/12 z-20 p-7 gap-10 ${isOpen ? 'block' : 'hidden'}`}>
                <img className="w-6 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} src="./images/icon-close.svg" alt="Fechar menu" />
                <ul className="flex flex-col gap-6 text-lg font-bold">
                    {ItensMenu.map((item, index) => (
                        <li key={index} className="hover:cursor-pointer">{item}</li>
                    ))}
                </ul>
            </nav>
            <div className={`fixed w-screen h-screen bg-black bg-opacity-50 right-0 z-10 ${isOpen ? 'block' : 'hidden'}`}></div>
            </section>
        </>
    )
}
