import { Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function ScrollAwareHeader({
    setHeaderHeight,
    showReserveBtn
}) {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }

        const handleScroll = () => {
            clearTimeout(timeoutRef.current); // Clear previous timeout

            timeoutRef.current = setTimeout(() => {
                setIsScrolled(window.scrollY > 20);
            }, 100); // Debounce for smooth updates
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutRef.current);
        };
    }, [setHeaderHeight]);

    useEffect(() => {
        let timeoutId;
        if (isScrolled && headerRef.current) {
            timeoutId = setTimeout(() => {
                setHeaderHeight(headerRef.current.offsetHeight);
            }, 300);
        }

        return () => clearTimeout(timeoutId);
    }, [isScrolled, setHeaderHeight]);

    return (
        <header ref={headerRef} className="sticky top-0 bg-white shadow-md flex justify-between z-50 transition-all duration-300 ease-in-out 
            overflow-hidden px-8 md:px-16 xl:px-24 py-4"
        >
            <div>
                <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <div
                    className={
                        `flex flex-col items-center justify-center gap-y-4 transition-all duration-300 ease-in-out 
                        ${isScrolled ? "opacity-0 scale-95 h-0 overflow-hidden" : "opacity-100 scale-100 h-auto"}`
                    }
                >
                    <div className="w-[160px] flex justify-center">
                        <span className="text-gray-900 text-lg mr-4">Stays</span>
                        <span className="text-gray-400 text-lg">Experiences</span>
                    </div>
                    <div className="w-[800px] px-8 py-4 border border-[#DDDDDD] rounded-4xl shadow-md bg-white">
                        Search destinations
                    </div>
                </div>
                <div
                    className={
                        `transition-all duration-300 ease-in-out bg-white border border-[#DDDDDD] w-[350px] rounded-3xl shadow-md text-center 
                        ${isScrolled ? "opacity-100 scale-100 px-6 py-2.5" : "opacity-0 scale-95 h-0 overflow-hidden"}`
                    }
                >
                    <h2 className="font-semibold">Anywhere</h2>
                </div>
            </div>
            <div>
                {/* Scroll Position: {isScrolled ? "Scrolled" : "Top"} */}
                <div className={`flex items-center gap-x-4 ${showReserveBtn ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                    <div className="grid grid-rows-2">
                        <div>
                            <span className="font-semibold">$113 </span>night
                        </div>
                        <div className="flex items-center gap-x-1">
                            <span className="flex items-center"><Star size={14} fill="#000" />&nbsp;5.0</span>
                            &middot;
                            <span className="font-light">3 reviews</span>
                        </div>
                    </div>
                    <button className="bg-green-500 text-white font-semibold py-3 px-12 rounded-md hover:bg-green-600 transition duration-300">
                        Reserve
                    </button>
                </div>
            </div>
        </header>
    );
}

export default ScrollAwareHeader;
