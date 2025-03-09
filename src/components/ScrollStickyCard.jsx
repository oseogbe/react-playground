import { useEffect } from "react";

const ScrollStickyCard = ({
    headerHeight,
    onReserveBtnOutOfView
}) => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        onReserveBtnOutOfView(true);
                    } else {
                        onReserveBtnOutOfView(false);
                    }
                });
            },
            { threshold: [1] }
        );

        observer.observe(document.querySelector('#reserve-btn'));

        return () => observer.disconnect();
    }, [onReserveBtnOutOfView]);
    return (
        <div className="sticky" style={{ top: `${headerHeight + 16}px` }}>
            <div className="w-full h-[600px] border border-[#DDDDDD] shadow-md rounded-xl p-6">
                <div className="space-x-1">
                    <span className="font-medium text-[#6A6A6A] text-2xl line-through">$32</span>
                    <span className="font-medium text-gray-900 text-2xl">$26</span>
                    <span className="">night</span>
                </div>
                <div className="mt-4 h-[112px] rounded-md border border-[#DDDDDD] overflow-hidden">

                </div>
                <button id="reserve-btn" className="w-full mt-4 bg-green-500 text-white font-semibold py-3 px-4 rounded-md hover:bg-green-600 transition duration-300">
                    Reserve
                </button>
            </div>
        </div>
    );
}

export default ScrollStickyCard;