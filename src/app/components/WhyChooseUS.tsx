"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Wide Range of Products",
    description:
      "Explore a diverse collection of products across multiple categories, from fashion to electronics, groceries to home essentials. Find everything you need in one convenient online store.",
  },
  {
    title: "Seamless Shopping Experience",
    description:
      "Enjoy a hassle-free and intuitive shopping journey with our user-friendly platform. From product discovery to checkout, we've designed every step to save you time and effort.",
  },
  {
    title: "Secure Payments",
    description:
      "Shop with confidence knowing that your transactions are protected with top-notch security measures. Choose from multiple payment options for a smooth and secure checkout experience.",
  },
  {
    title: "Fast and Reliable Delivery",
    description:
      "Get your orders delivered quickly and safely to your doorstep. With our trusted delivery partners, we ensure your shopping experience is stress-free and reliable.",
  },
  {
    title: "Exclusive Deals and Discounts",
    description:
      "Save more with our exclusive deals and seasonal discounts. Shop your favorite products at unbeatable prices and enjoy great value for your money.",
  },
  {
    title: "24/7 Customer Support",
    description:
      "We're here for you anytime, anywhere. Reach out to our friendly customer support team for help with orders, queries, or anything else. Your satisfaction is our priority.",
  },
];

function WhyChooseUS() {
  return (
    <div className="mt-16">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUS;