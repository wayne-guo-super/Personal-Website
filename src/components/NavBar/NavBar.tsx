import NaviMenu from './menu'

export default function NavBar() {
    return(
        <nav className="bg-white ring-5 ring-[#38afb5] w-full shadow-xl flex justify-center items-center">
            <button className="mt-1 font-bold font-mono text-xl text-gray-500 mr-3">
                <a href="./">enter nickname..</a>
            </button>
            <NaviMenu/>
        </nav>
        )
}