import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
      <div className="p-5 relative z-10 w-full text-center"> 
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Become a Pro at E-Commerce</h1>
        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Welcome to MxWebWorld, your go-to online shopping hub! Discover an extensive selection of products, from stylish fashion and innovative electronics to home essentials and beauty favorites, all at unbeatable prices. Take advantage of special offers, secure checkout, fast & reliable delivery.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-3 text-white rounded-md">
            <Button
                borderRadius="1.75rem"
                className="bg-black dark:bg-slate-900 text-white dark:text-white dark:border-slate-800"
                >Explore Ideas
            </Button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
