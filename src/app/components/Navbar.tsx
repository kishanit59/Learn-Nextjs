"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [showElectronics, setShowElectronics] = useState(false);
  
    const navItems = [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Catalog", href: "/" },
      { label: "About Us", href: "/" },
      { label: "Our Story", href: "/" },
      { label: "Contact", href: "/" },
    ];
  
    return (
      <>
        {/* Main Navigation */}
        <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-bold">
          <Menu setActive={setActive}>
            {/* Home Menu Item */}
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Home">Test
              </MenuItem>
            </Link>
  
            {/* Products Menu Item */}
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="flex flex-col space-y-4 text-sm">
                <div
                  className="relative"
                  onMouseEnter={() => setShowElectronics(true)}
                  onMouseLeave={() => setShowElectronics(false)}
                >
                  <HoveredLink href="/products/electronics">Electronics</HoveredLink>
  
                  {/* Electronics Submenu */}
                  {showElectronics && (
                    <div className="absolute left-full top-0 ml-2 w-64 shadow-lg rounded-lg overflow-hidden">
                      <nav className="py-4">
                        {/* Logo */}
                        <div className="px-6 pb-4 border-b">
                          <div className="text-xl font-bold">
                            <Link href="/">Electronics</Link>
                          </div>
                        </div>
  
                        {/* Navigation Links */}
                        <ul className="space-y-2 px-4 py-3">
                          {navItems.map((item) => (
                            <li
                              key={item.label}
                              className="cursor-pointer hover:text-blue-600"
                            >
                              <Link
                                href={item.href}
                                className="block px-2 py-1 transition-colors duration-300"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
  
                        {/* Icons */}
                        <div className="flex justify-around px-6 pt-3 border-t">
                          <Link href="/cart">
                            <FaShoppingCart className="text-xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                          </Link>
                          <Link href="/account">
                            <FaUser className="text-xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                          </Link>
                        </div>
                      </nav>
                    </div>
                  )}
                </div>
                <HoveredLink href="/products/footwear">Footwear</HoveredLink>
                <HoveredLink href="/products/toys">Toys</HoveredLink>
              </div>
            </MenuItem>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="About Us">Test
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Catalog">Test
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Our Story">Test
              </MenuItem>
            </Link>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Contact Us">Test
              </MenuItem>
            </Link>
          </Menu>
        </div>
  
        {/* Mobile Menu Button - Only shown on small screens */}
        <button
          className="fixed top-4 right-4 md:hidden z-50 focus:outline-none"
          onClick={() => setActive(active === "menu" ? null : "menu")}
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
  
        {/* Mobile Menu */}
        {active === "menu" && (
          <div className="fixed inset-0 bg-black md:hidden z-40">
            <div className="pt-16 px-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setActive(null)}
                      className="block text-lg font-medium hover:text-blue-600"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default Navbar;