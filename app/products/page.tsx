"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/product-data"

export default function ProductsPage() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("")
  // State for filtered products
  const [filteredCategories, setFilteredCategories] = useState(productData)

  // Filter products based on category and search query
  useEffect(() => {
    let result = productData

    // Filter by category if selected
    if (selectedCategory) {
      result = result.filter((category) => category.slug === selectedCategory)
    }

    // Filter by search query if provided
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result
        .map((category) => {
          // Filter products within each category
          const filteredProducts = category.products.filter(
            (product) =>
              product.title.toLowerCase().includes(query) ||
              product.description.some((desc) => desc.toLowerCase().includes(query)),
          )

          // Only include category if it has matching products
          if (filteredProducts.length > 0) {
            return {
              ...category,
              products: filteredProducts,
            }
          }
          return null
        })
        .filter(Boolean) as typeof productData
    }

    setFilteredCategories(result)
  }, [selectedCategory, searchQuery])

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
    <>
      {/* Products Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Our Products</h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore our comprehensive range of advanced inspection and maintenance equipment
            </p>
          </div>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary transition duration-150 ease-in-out sm:text-sm"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-between items-center"
          >
            <h2 className="text-xl font-montserrat font-semibold text-primary mb-4 sm:mb-0">Filter by Category</h2>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-primary text-white" : ""}
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>

              {productData.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.slug ? "default" : "outline"}
                  className={selectedCategory === category.slug ? "bg-primary text-white" : ""}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full mx-auto mb-4">
                <Search className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 mb-6">No products match your search criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory(null)
                  setSearchQuery("")
                }}
                className="bg-primary text-white hover:bg-secondary"
              >
                View All Products
              </Button>
            </motion.div>
          ) : (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
              {filteredCategories.map((category, index) => (
                <motion.div key={category.id} variants={itemVariants}>
                  <div className="border-b border-gray-200 mb-8 pb-4">
                    <h2 className="text-3xl font-montserrat font-bold text-primary" id={category.slug}>
                      {category.name}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * productIndex }}
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
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {product.description[0].replace("●", "").trim()}
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <Link href={`/products/product/${product.slug}`}>
                            <Button className="bg-primary hover:bg-secondary text-white w-full">View Details</Button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {index < filteredCategories.length - 1 && <div className="mt-12"></div>}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to assist you in selecting the perfect inspection solution for your specific
              requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-primary text-white">
                Contact Our Specialists
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
