"use client"

import { Shield, Wrench, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

export default function Benefits() {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Strong Equipment",
      description:
        "Our industrial-grade equipment is built to withstand the harshest environments and deliver reliable performance.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Customer Service",
      description:
        "We provide exceptional customer support and technical assistance to ensure your operations run smoothly.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Money Saving",
      description:
        "Our solutions help you reduce downtime, prevent costly repairs, and extend the lifespan of your infrastructure.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
          <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TOPS Achievement provides industry-leading solutions that help our clients achieve operational excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">{benefit.icon}</div>
                <h3 className="text-xl font-montserrat font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
