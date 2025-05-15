"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/product-data"

export default function CategoryPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  // Find the current category by slug
  const category = productData.find((cat) => cat.slug === slug)

  // If category doesn't exist, redirect to products page
  useEffect(() => {
    if (!category) {
      router.push("/products")
    }
  }, [category, router])

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

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center py-12">
          <div className="spinner w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin mb-4"></div>
          <p className="text-lg text-gray-600">Loading category...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Category Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">{category.name}</h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore our range of advanced {category.name.toLowerCase()} solutions
            </p>
          </div>
        </motion.div>
      </section>

      {/* Breadcrumbs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-gray-50 py-3"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{category.name}</span>
          </div>
        </div>
      </motion.div>

      {/* Products List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {category.products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description[0].replace("●", "").trim()}</p>
                </div>
                <div className="p-6 pt-0">
                  <Link href={`/products/product/${product.slug}`}>
                    <Button className="bg-primary hover:bg-secondary text-white w-full">View Details</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* If no products */}
          {category.products.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">There are currently no products in this category.</p>
              <Link href="/products">
                <Button className="bg-primary hover:bg-secondary text-white">View All Products</Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Other Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of inspection and maintenance solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {productData
              .filter((cat) => cat.id !== category.id)
              .slice(0, 3)
              .map((cat, index) => {
                // Get first product from category for image
                const firstProduct = cat.products[0]

                return (
                  <motion.div
                    key={cat.id}
                    variants={itemVariants}
                    className="group block bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href={`/products/category/${cat.slug}`} className="block h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={firstProduct?.imageUrl || "/placeholder.svg?height=400&width=600"}
                          alt={cat.name}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <h3 className="text-xl font-montserrat font-semibold text-white">{cat.name}</h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-10"
          >
            <Link
              href="/products"
              className="inline-block text-primary hover:text-secondary transition-colors font-medium"
            >
              View All Categories <span className="ml-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
