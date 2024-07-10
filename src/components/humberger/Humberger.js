const Humberger = ({ isMenuMobile, setIsMenuMobile }) => {
    return (
        <div id="humberger" className="lg:hidden block text-accent z-[70]">
            <button
                title="Menu"
                onClick={() => setIsMenuMobile(!isMenuMobile)}
                id="humberger"
                className="space-y-1">
                <span
                    className={`block h-[2px] w-[18px] rounded-sm bg-accent origin-top-left transition duration-300 ease-in-out dark:bg-slate-600 ${
                        isMenuMobile ? 'rotate-45' : ''
                    }`}></span>
                <span
                    className={`block h-[2px] w-[18px] rounded-sm bg-accent transition  duration-300 ease-in-out dark:bg-slate-600 ${
                        isMenuMobile ? 'scale-0' : ''
                    }`}></span>
                <span
                    className={`block h-[2px] w-[18px] rounded-sm bg-accent origin-bottom-left  transition duration-300 ease-in-out dark:bg-slate-600 ${
                        isMenuMobile ? '-rotate-45' : ''
                    }`}></span>
            </button>
        </div>
    )
}

export default Humberger
