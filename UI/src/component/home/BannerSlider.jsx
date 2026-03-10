import { useState, useEffect } from "react";
import banner1 from "../../assets/banners/banner1.png";
import banner2 from "../../assets/banners/banner2.png";
import banner3 from "../../assets/banners/banner3.png";
// import logo from "../../assets/logo.png"
import { IoLocation} from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
export default function BannerSlider() {

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);
    const nextSlide = () => {
        if (current < 2) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(2);
        }
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden">



            {/* Logo */}
            {/* <div className="absolute top-6 left-10 z-30">

                <img
                    src={logo}
                    alt="Conference Logo"
                    className="h-16 md:h-20 w-auto rounded-xl"
                />
            </div> */}

            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >

                {/* Slide 1 */}
                <div className="relative min-w-full h-[600px]">
                    <img
                        src={banner1}
                        alt="Conference Banner"
                        draggable="false"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                   {/* Increased max-width from 3xl to 5xl to allow the title to stretch */}
<div className="absolute bottom-24 left-10 md:left-18 text-white max-w-5xl">
    {/* Heading width increased to ensure "Association" stays on line one */}
    <h1 className="text-2xl md:text-4xl font-bold mb-2 leading-tight">
        Mar Thoma Voluntary Evangelists' Association <br className="hidden md:block" /> 
        Diocesan XVIII Conference 2026
    </h1>

    <p className="text-lg md:text-xl font-medium mb-4 italic text-gray-200">
        Come and See: The Divine Invite (St.John 1:39 & 46)
    </p>

    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm md:text-base">
        <div className="flex items-center">
            <IoLocation className="mr-2" /> 
            <span>Mar Thoma Event Center, Dallas TX</span>
        </div>
        
        <span className="hidden md:inline text-gray-400">|</span> 
        
        <div className="flex items-center">
            <MdDateRange className="mr-2" />
            <span>August 20 - 23, 2026</span>
        </div>
    </div>

    <button 
    className="mt-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-4 text-lg text-white hover:bg-white hover:text-black transition">
        Learn More
    </button>
</div>
                </div>

                {/* Slide 2 */}
                <div className="relative min-w-full h-[600px]">
                    <img
                        src={banner2}
                        alt="Registration Banner"
                        draggable="false"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-start justify-center text-white pl-20 pt-36">

                        {/* Heading */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-10">
                            Registration & Pricing
                        </h1>

                        {/* Pricing Boxes */}
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* Box 1 */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-5 w-[300px] ">
                                <p className="text-sm uppercase tracking-wide mb-1">Individual</p>

                                <h2 className="text-4xl font-bold mb-2">$175</h2>

                                <hr className="border-white/40 mb-2" />

                                <p className="text-xs opacity-90">
                                    (Registration $50 + Conference Fee $125)
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-5 w-[300px] ">
                                <p className="text-sm uppercase tracking-wide mb-1">Kids (12 - 18)</p>

                                <h2 className="text-4xl font-bold mb-2">$125</h2>

                                <hr className="border-white/40 mb-2" />

                                <p className="text-xs opacity-90">
                                    (Registration $50 + Conference Fee $75)
                                </p>
                            </div>

                            {/* Box 3 */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-5 w-[300px] ">
                                <p className="text-sm uppercase tracking-wide mb-1">Kids under 12</p>

                                <h2 className="text-4xl font-bold mb-2">FREE</h2>

                                <hr className="border-white/40 mb-2" />

                                <p className="text-xs opacity-90">
                                    No Other Charges
                                </p>
                            </div>

                        </div>

                        {/* Register Button */}
                        <button 
                        className="mt-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-4 text-lg text-white hover:bg-white hover:text-black transition">
                            Register Now
                        </button>

                    </div>
                </div>

                {/* Slide 3 */}
                <div className="relative min-w-full h-[600px]">
                    <img
                        src={banner3}
                        alt="Accommodation Banner"
                        draggable="false"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute bottom-24 left-10 md:left-18 text-white max-w-xl">
                        <h1 className="text-2xl md:text-4xl font-bold mb-4">
                            Accommodation & Stay
                        </h1>

                        <p className="mb-6 text-md md:text-lg">
                            Comfortable accommodation options will be available for conference participants. Plan your stay and make the most of the fellowship and sessions.
                        </p>

                        <button 
                        className="mt-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-md px-10 py-4 text-lg text-white hover:bg-white hover:text-black transition">
                            Book Accommodation
                        </button>
                    </div>
                </div>

            </div>

            {/* Left Arrow */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white text-2xl px-4 py-2 rounded-full hover:bg-black/60 transition"
            >
                ❮
            </button> */}

            {/* Right Arrow */}
            {/* <button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white text-2xl px-4 py-2 rounded-full hover:bg-black/60 transition"
            >
                ❯
            </button> */}
            

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

                <button
                    onClick={() => setCurrent(0)}
                    className={`w-3 h-3 rounded-full ${current === 0 ? "bg-white" : "bg-white/50"
                        }`}
                ></button>

                <button
                    onClick={() => setCurrent(1)}
                    className={`w-3 h-3 rounded-full ${current === 1 ? "bg-white" : "bg-white/50"
                        }`}
                ></button>

                <button
                    onClick={() => setCurrent(2)}
                    className={`w-3 h-3 rounded-full ${current === 2 ? "bg-white" : "bg-white/50"
                        }`}
                ></button>

            </div>

        </div>
    );
}
