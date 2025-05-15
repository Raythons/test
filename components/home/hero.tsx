"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Hero Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/al-faisaliah-tower.jpg"
          alt="Al Faisaliah Tower, Saudi Arabia"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 30, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/al-faisaliah-tower.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col justify-center h-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6">
              Leading Provider of Industrial Solutions
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-white/90 mb-8">
              TOPS Achievement delivers cutting-edge inspection and maintenance equipment for industrial applications
              across Saudi Arabia and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-transparent hover:bg-white/20 text-white border-2 border-white">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
