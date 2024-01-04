export const ProductInfo = () => {
    return (
        <>
            <section className="flex flex-col p-6 gap-3">
                <h3 className="text-orange-400 text-md font-bold uppercase tracking-widest">Sneaker Company</h3>
                <h2 className="text-3xl font-bold">Fall Limited Edition Sneakers</h2>
                <p className="text-gray-500">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.</p>
            </section>

            <section className="flex px-6 items-center gap-5">
                <h2 className="text-3xl font-bold">$125.00</h2>
                <aside className="bg-orange-100 text-orange-400 font-bold py-1 px-2 rounded">50%</aside>
                <h4 className="absolute right-7 text-gray-400 line-through">$250.00</h4>
            </section>

            <section className="flex flex-col items-center font-bold">
                <div className="bg-gray-100 flex justify-between px-6 py-4 my-10 w-10/12">
                    <nav className="text-orange-600 text-2xl hover:cursor-pointer">-</nav>
                    <p className="text-xl">0</p>
                    <nav className="text-orange-600 text-2xl hover:cursor-pointer">+</nav>
                </div>
                <div className="bg-orange-400 text-white rounded flex w-10/12 px-6 py-4 gap-7 justify-center mb-10 -translate-y-4 hover:cursor-pointer">
                    <img src="./images/icon-cart.svg" alt="Carrinho" />
                    <h2>Add to cart</h2>
                </div>
            </section>
        </>
    )
}