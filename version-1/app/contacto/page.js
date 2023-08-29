export default function Contacto() {
    return (
        <main className="dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 grid grid-cols-2">
                <div></div>
                <form className="bg-gray-800 p-4">
                    <h1 className="text-2xl font-semibold text-gray-100 mb-4">Formulario de contacto</h1>
                    <div class="mb-6">
                        <input placeholder="Ingresa tu nombre" type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </input>
                    </div>
                    <div class="mb-6">
                        <input placeholder="Ingresa tu email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </input>
                    </div>
                    <div class="mb-6">
                        <textarea placeholder="Ingresa tu mensaje" id="mensaje" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </textarea>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar mensaje</button>
                </form>
            </div>
        </main>
    )
}
