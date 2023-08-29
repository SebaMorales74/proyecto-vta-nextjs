"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'

const styles = {
    menuItem: "block py-2 pr-4 text-gray-900 hover:text-cyan-500 md:border-0 md:p-0 dark:text-gray-100",
    menuItemActive: "block py-2 pr-4 underline text-cyan-500 md:border-0 md:p-0"
}

const navigation = [
    {
        name: "Inicio",
        href: "/"
    },
    {
        name: "Nosotros",
        href: "/nosotros"
    },
    {
        name: "Contacto",
        href: "/contacto"
    }
]

export function Header() {
    const pathname = usePathname()
    return (
        <nav className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center dark:text-white">
                    <svg className="h-8 mr-3" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" fillRule="evenodd" />
                    </svg>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">CodeIgnite</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {
                            navigation.map((item) => {
                                return (
                                    <li>
                                        <Link href={item.href} className={pathname == item.href ? styles.menuItemActive : styles.menuItem}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export function Footer() {
    const pathname = usePathname()
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center dark:text-white pb-4 md:p-0">
                        <svg className="h-8 mr-3" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" fillRule="evenodd" />
                        </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">CodeIgnite</span>
                    </Link>
                    <ul class="flex flex-wrap gap-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {
                            navigation.map((item) => {
                                return (
                                    <li>
                                        <Link href={item.href} className={pathname == item.href ? styles.menuItemActive : styles.menuItem}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" class="hover:underline">CodeIgnite™</Link>. Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}