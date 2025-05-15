"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const mainNavItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Inspection Services", href: "/services/inspection" },
      { name: "Maintenance Solutions", href: "/services/maintenance" },
      { name: "Technical Support", href: "/services/technical-support" },
      { name: "Training", href: "/services/training" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Pipe Inspection Robot", href: "/products/category/pipe-inspection-robot" },
      { name: "Push Camera", href: "/products/category/push-camera" },
      { name: "Manhole Camera", href: "/products/category/manhole-camera" },
      { name: "Videoscope", href: "/products/category/videoscope" },
      { name: "Cutter", href: "/products/category/cutter" },
      { name: "UV", href: "/products/category/uv" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1 text-primary" />
                <span>+966 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1 text-primary" />
                <span>info@tops-achievement.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-primary" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-primary" />
                <span>Sun-Thu: 8:00AM - 5:00PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "py-4 transition-all duration-300 w-full z-50",
          isScrolled ? "sticky top-0 bg-white shadow-md" : "",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-40">
                <Image src="/logo.jpg" alt="TOPS Achievement Logo" fill className="object-contain" priority />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={cn(
                          "flex items-center font-montserrat text-base font-medium transition-colors",
                          isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                        )}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-2 bg-white rounded-md shadow-lg border border-gray-200">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "font-montserrat text-base font-medium transition-colors",
                        isActive(item.href) ? "text-primary" : "text-gray-700 hover:text-primary",
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-primary hover:bg-secondary">Get a Quote</Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-md text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 lg:hidden transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <div className="relative h-12 w-36">
                <Image src="/logo.jpg" alt="TOPS Achievement Logo" fill className="object-contain" />
              </div>
            </Link>
            <button className="p-2 rounded-md text-gray-700" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <nav className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-4">
                  {item.submenu ? (
                    <div>
                      <button
                        className={cn(
                          "flex items-center justify-between w-full font-montserrat text-lg font-medium",
                          isActive(item.href) ? "text-primary" : "text-gray-700",
                        )}
                        onClick={() => toggleSubmenu(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn("h-5 w-5 transition-transform", openSubmenu === item.name ? "rotate-180" : "")}
                        />
                      </button>

                      {openSubmenu === item.name && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block font-montserrat text-lg font-medium",
                        isActive(item.href) ? "text-primary" : "text-gray-700",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t">
            <Button className="w-full bg-primary hover:bg-secondary">Get a Quote</Button>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+966 123 456 789</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@tops-achievement.com</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
