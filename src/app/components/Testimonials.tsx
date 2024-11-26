'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 
const customertestimonials = [
    {
      quote:
        "Shopping here has completely transformed my online buying experience. The products are top-notch, and the delivery was faster than expected. Highly recommended!",
      name: "Emma Johnson",
      title: "Verified Customer",
    },
    {
      quote:
        "I found everything I needed in one place at great prices. The customer service was exceptional, and they resolved my query in no time. I'll definitely shop here again!",
      name: "Michael Lee",
      title: "Loyal Shopper",
    },
    {
      quote:
        "The deals and discounts are unbeatable! I managed to save so much on my favorite brands. This is now my go-to online store for all my shopping needs.",
      name: "Sophia Brown",
      title: "Bargain Hunter",
    },
    {
      quote:
        "What impressed me most was the secure payment process. I felt confident shopping here, and the checkout experience was seamless. Kudos to the team!",
      name: "Daniel Smith",
      title: "Satisfied Customer",
    },
    {
      quote:
        "The website is super easy to navigate, and the product descriptions are very detailed. I loved the fast delivery and excellent packaging. Keep up the great work!",
      name: "Olivia Davis",
      title: "Happy Shopper",
    },
  ];
   

function OnlineShoppingTestimonials() {
  return (
    <div className="">
        <h2 className="mt-6 text-3xl font-bold text-center mb-8 z-10 text-white">Read Our Testimonials</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={customertestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>
  )
}

export default OnlineShoppingTestimonials