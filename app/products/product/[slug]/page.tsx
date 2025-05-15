"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { productData } from "@/lib/product-data"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  // State for active tab
  const [activeTab, setActiveTab] = useState<"description" | "specification" | "shipping" | "video">("description")

  // Find product by slug
  const product = useMemo(() => {
    for (const category of productData) {
      const found = category.products.find((p) => p.slug === slug)
      if (found) {
        return {
          ...found,
          category: {
            id: category.id,
            name: category.name,
            slug: category.slug,
            products: category.products,
          },
        }
      }
    }
    return null
  }, [slug])

  // If product doesn't exist, redirect to products page
  useEffect(() => {
    if (!product && slug) {
      router.push("/products")
    }
  }, [product, slug, router])

  // State for quote request modal
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  // Function to handle direct email link
  const handleRequestQuote = () => {
    setIsQuoteModalOpen(true)
  }

  // Function to prepare mailto link with product details
  const getMailtoLink = () => {
    if (!product) return "#"

    const recipient = "info@tops-achievement.com"
    const subject = encodeURIComponent(`Quote Request for ${product.title}`)
    const body = encodeURIComponent(
      `Hello TOPS Team,\n\n` +
        `I am interested in getting a quote for the ${product.title}.\n\n` +
        `Product Details:\n` +
        `- Product Name: ${product.title}\n` +
        `- Category: ${product.category.name}\n\n` +
        `Please provide me with pricing and availability information.\n\n` +
        `Thank you,\n` +
        `[Your Name]\n` +
        `[Your Contact Information]`,
    )

    return `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  // Dummy data for technical specifications
  const specifications = useMemo(() => {
    return [
      { label: "Camera Head", value: "" },
      { label: "Camera Size", value: "Φ14mm×125mm (Main body Φ14×125mm)" },
      { label: "Camera Total Length", value: "125mm (include spring)" },
      { label: "Sensor", value: '1/4" CMOS, 400 TV-Line' },
      { label: "Pixel", value: "688H x 488V" },
      { label: "View Angle", value: "82°" },
      { label: "Focus Distance", value: "10cm (approx)" },
      { label: "Depth-of-Field", value: "20cm (approx)" },
      { label: "Front Lens", value: "Sapphire glass" },
      { label: "Water-Proof", value: "10m Under Water (Camera fix on Cable)" },
      { label: "Shell Material", value: "Stainless steel" },
      { label: "Lighting", value: "Built-in 4×LED(White)" },
      { label: "Operating Temperature", value: "-10~50°C/+14~+122°F" },
      { label: "Storage Temperature", value: "-20~60°C/+4~+140°F" },
      { label: "Cable Wheel", value: "" },
      { label: "Cable Length", value: "20M-40M fiberglass rod cable with on-screen distance counter" },
      { label: "Dia. of push cable", value: "4.8mm" },
      { label: "Material of cable", value: "Fiberglass covered by PP" },
    ]
  }, [])

  // Shipping information
  const shippingInfo = useMemo(() => {
    return [
      { label: "Shipping Method", value: "Express Courier (DHL, FedEx, UPS)" },
      { label: "Delivery Time", value: "3-7 business days (International)" },
      { label: "Package Dimensions", value: "64cm × 52cm × 36cm" },
      { label: "Weight", value: "11.5kg" },
      { label: "Warranty", value: "12 months standard warranty" },
    ]
  }, [])

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center py-12">
          <div className="spinner w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto animate-spin mb-4"></div>
          <p className="text-lg text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Quote Request Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative"
          >
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>

            <h3 className="text-2xl font-montserrat font-semibold text-primary mb-6">Request a Quote</h3>
            <div className="text-center">
              <div className="relative h-32 w-32 mx-auto mb-4">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain object-center rounded-md shadow-md"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h4>
              <p className="text-sm text-gray-600 mb-6">{product.category.name}</p>
            </div>

            <p className="text-gray-700 mb-6">
              Clicking the button below will open your default email client with a pre-filled message to request a quote
              for this product.
            </p>

            <div className="space-y-6">
              <a
                href={getMailtoLink()}
                className="w-full block py-3 px-4 bg-primary hover:bg-secondary text-white font-montserrat font-medium rounded-md shadow-md transition-colors text-center"
              >
                Open Email Client
              </a>

              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="w-full py-2 px-4 border border-gray-300 text-gray-700 font-medium rounded-md transition-colors hover:bg-gray-50 text-center"
              >
                Cancel
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>You can also email us directly at:</p>
              <a href="mailto:info@tops-achievement.com" className="text-primary hover:underline">
                info@tops-achievement.com
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Breadcrumbs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
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
            <Link href={`/products/category/${product.category.slug}`} className="hover:text-primary transition-colors">
              {product.category.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">{product.title}</span>
          </div>
        </div>
      </motion.div>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <motion.div variants={fadeInVariants} initial="hidden" animate="visible">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Thumbnails - placeholder for now */}
              <div className="flex mt-4 space-x-2">
                <div className="w-20 h-20 border border-gray-200 rounded-md overflow-hidden cursor-pointer">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div variants={fadeInVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">{product.title}</h1>
              <div className="flex items-center mb-6">
                <span className="text-sm bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                  {product.category.name}
                </span>
              </div>

              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-6">{product.description[0].replace("●", "").trim()}</p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Latest Technology</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>High Quality Materials</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>12 Months Warranty</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button onClick={handleRequestQuote} className="bg-primary hover:bg-secondary text-white" size="lg">
                  Request a Quote
                </Button>
                <Link href={`/products/category/${product.category.slug}`}>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    size="lg"
                  >
                    View Similar Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Product Details Tabs */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="border-t border-gray-200 pt-8"
          >
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 -mb-px" aria-label="Product Details">
                <button
                  className={`${
                    activeTab === "description"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-primary hover:border-gray-300"
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-md`}
                  onClick={() => setActiveTab("description")}
                >
                  DESCRIPTION
                </button>
                <button
                  className={`${
                    activeTab === "specification"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-primary hover:border-gray-300"
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-md`}
                  onClick={() => setActiveTab("specification")}
                >
                  SPECIFICATION
                </button>
                <button
                  className={`${
                    activeTab === "shipping"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-primary hover:border-gray-300"
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-md`}
                  onClick={() => setActiveTab("shipping")}
                >
                  SHIPPING
                </button>
                <button
                  className={`${
                    activeTab === "video"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-primary hover:border-gray-300"
                  } whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-md`}
                  onClick={() => setActiveTab("video")}
                >
                  VIDEO
                </button>
              </nav>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {product.description.map((desc, index) => (
                    <p key={index} className="text-gray-700">
                      {desc.startsWith("●") ? (
                        <span>
                          <span className="text-primary font-bold mr-2">•</span>
                          {desc.replace("●", "").trim()}
                        </span>
                      ) : (
                        desc
                      )}
                    </p>
                  ))}

                  <p className="text-gray-700 mt-4">
                    The {product.title} is designed for professional use in industrial inspection applications, offering
                    outstanding performance and reliability in demanding environments. Its robust construction and
                    advanced features make it an ideal solution for a wide range of inspection tasks.
                  </p>

                  <p className="text-gray-700">
                    For more detailed information about this product, please contact our technical team.
                  </p>
                </motion.div>
              )}

              {activeTab === "specification" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-x-auto"
                >
                  <table className="min-w-full border-collapse">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          {spec.value ? (
                            <>
                              <td className="py-3 px-4 border border-gray-200 font-medium text-gray-700 w-1/3">
                                {spec.label}
                              </td>
                              <td className="py-3 px-4 border border-gray-200 text-gray-700">{spec.value}</td>
                            </>
                          ) : (
                            <td className="py-3 px-4 border border-gray-200 font-semibold text-primary" colSpan={2}>
                              {spec.label}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}

              {activeTab === "shipping" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-montserrat font-semibold text-primary mb-4">Shipping Information</h3>
                    <table className="min-w-full">
                      <tbody>
                        {shippingInfo.map((info, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="py-3 px-4 border border-gray-200 font-medium text-gray-700 w-1/3">
                              {info.label}
                            </td>
                            <td className="py-3 px-4 border border-gray-200 text-gray-700">{info.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-lg font-montserrat font-semibold text-primary mb-4">Important Notice</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Delivery times may vary depending on your location and customs clearance.</li>
                      <li>All products are thoroughly tested before shipping.</li>
                      <li>Package includes all standard accessories as specified in the product description.</li>
                      <li>For specific shipping requirements, please contact our logistics department.</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === "video" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-2">Product Video</h3>
                    <p className="text-gray-600">
                      Product demonstration video is currently being produced. Please check back later or contact us for
                      a live demonstration.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Related Products */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mt-16 border-t border-gray-200 pt-12"
          >
            <h2 className="text-2xl font-montserrat font-semibold text-primary mb-6">Related Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.category.products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProduct.imageUrl || "/placeholder.svg"}
                        alt={relatedProduct.title}
                        fill
                        className="object-contain object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex-grow">
                      <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {relatedProduct.description[0].replace("●", "").trim()}
                      </p>
                    </div>
                    <div className="p-4 pt-0">
                      <Link href={`/products/product/${relatedProduct.slug}`}>
                        <Button className="bg-primary hover:bg-secondary text-white w-full">View Details</Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-white mb-6">Interested in {product.title}?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our team today to discuss your specific requirements and discover how this product can benefit
              your operations.
            </p>
            <Button onClick={handleRequestQuote} className="bg-primary hover:bg-secondary text-white" size="lg">
              Request E-mail Quote
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
