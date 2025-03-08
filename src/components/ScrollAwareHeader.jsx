import { useEffect, useState } from 'react';

function ScrollAwareHeader() {

    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Introduce a small threshold to prevent flickering
            if (window.scrollY > 145 && !isScrolled) {
                setIsScrolled(true);
            } else if (window.scrollY < 85 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);
    return (
        <header className="sticky top-0 bg-white shadow-md flex justify-between items-center p-4 z-10">
            <div className="flex-1">
                <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            <div className="flex-1 flex flex-col items-center">
                {!isScrolled ? (
                    <div
                        className={`w-[850px] flex flex-col place-items-center transition-all duration-300 ease-in-out ${!isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}
                    >
                        <div className='w-[160px] flex text-xl font-semibold'>
                            <div className='flex-1'>
                                <span className='text-gray-900'>Stays</span>
                            </div>
                            <div className='flex-1'>
                                <span className='text-gray-400'>Experiences</span>
                            </div>
                        </div>
                        <div className='w-[800px] px-8 py-4 rounded-3xl shadow-md'>
                            Search destinations
                        </div>
                    </div>
                ) : (
                    <div
                        className={`w-[350px] px-6 py-2.5 rounded-3xl shadow-md transition-all duration-300 ease-in-out ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}
                    >
                        <h2 className='font-semibold'>Anywhere</h2>
                    </div>
                )}
            </div>
            <div className="flex-1 text-right">
                Scroll Position: {scrollY}
            </div>
        </header>
    );
}

export default ScrollAwareHeader
