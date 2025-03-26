import Menu from './menu'

export default function NavBar() {
    return(
        <nav className="fixed top-0 left-0 w-full shadow-md p-4 flex items-center backdrop-filter backdrop-blur-md bg-opacity-30">
            <Menu/>
            <button className="mt-1 font-bold font-mono text-xl text-gray-500">
                <a href="./">enter nickname..</a>
            </button>
        </nav>
        )
}