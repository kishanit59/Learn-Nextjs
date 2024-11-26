'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const products = [
    {
      title: "SmartX 4K OLED TV",
      description:
        "A premium smart television offering 4K resolution, OLED display, and advanced AI-enhanced visuals for an immersive viewing experience.",
      link: "https://example.com/smartx-4k-oled-tv",
    },
    {
      title: "GadgetPro Wireless Earbuds",
      description:
        "High-quality wireless earbuds with active noise cancellation, superior sound clarity, and a long-lasting battery life.",
      link: "https://example.com/gadgetpro-earbuds",
    },
    {
      title: "PowerMax Ultra Laptop",
      description:
        "A high-performance laptop with the latest processor, cutting-edge graphics, and an ultra-slim design for professionals and gamers.",
      link: "https://example.com/powermax-ultra-laptop",
    },
    {
      title: "TechSpark Smartwatch",
      description:
        "A versatile smartwatch with fitness tracking, GPS, heart rate monitoring, and seamless connectivity with your devices.",
      link: "https://example.com/techspark-smartwatch",
    },
    {
      title: "ZoomCam 360 Pro",
      description:
        "A 360-degree action camera designed for capturing every adventure in stunning clarity, featuring waterproof and shockproof design.",
      link: "https://example.com/zoomcam-360-pro",
    },
    {
      title: "AirCool Silent AC",
      description:
        "An energy-efficient air conditioner with smart cooling, voice control, and ultra-quiet operation for a comfortable home environment.",
      link: "https://example.com/aircool-silent-ac",
    },
  ];
  

function UpcomingProducts() {
    return (
        <div className='p-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='mt-8 text-teal-700 tracking-wide uppercase font-medium text-4xl'>FEATURED PRODUCTS</h2>
                    <p className='mt-8 text-3xl leading-8 font-extrabold tracking-tight text-fuchsia-100 sm:text-4xl'>Upcoming products are new offerings that are set to launch soon.</p>
                </div>
                <div className='mt-10'> 
                    <HoverEffect items={products}/>
                </div>


                <div className="text-center">
                    <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                            <Link href="/" className="mb-10">
                                View Upcoming Products
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpcomingProducts