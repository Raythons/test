"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/product-data"

export default function FeaturedProducts() {
  // Get one product from each category for featured display
  const featuredProducts = productData
    .map((category) => {
      return {
        category: category.name,
        categorySlug: category.slug,
        product: category.products[0],
      }
    })
    .slice(0, 6) // Limit to 6 categories

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of advanced inspection and maintenance equipment for industrial applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.product.imageUrl || "/placeholder.svg"}
                  alt={item.product.title}
                  fill
                  className="object-contain object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{item.category}</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">{item.product.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.product.description[0].replace("●", "").trim()}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/products/product/${item.product.slug}`}>
                  <Button className="bg-primary hover:bg-secondary text-white w-full">View Details</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
