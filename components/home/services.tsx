"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "EPC Project Development",
      description:
        "Comprehensive Engineering, Procurement, and Construction services for industrial projects, from concept to completion with expert project management.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/epc-project-development",
      details: [
        "Feasibility studies and project planning",
        "Engineering design and technical specifications",
        "Procurement of equipment and materials",
        "Construction management and supervision",
        "Project commissioning and handover",
      ],
    },
    {
      title: "Operation and Maintenance",
      description:
        "Professional operation and maintenance services to ensure optimal performance and longevity of your industrial equipment and infrastructure.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/operation-maintenance",
      details: [
        "Preventive and predictive maintenance",
        "Emergency repair services",
        "Equipment performance optimization",
        "Operator training and certification",
        "Maintenance planning and scheduling",
      ],
    },
    {
      title: "Civil, Electrical and Mechanical Works",
      description:
        "Specialized civil, electrical, and mechanical engineering services for industrial applications, delivered by our team of experienced professionals.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/civil-electrical-mechanical",
      details: [
        "Structural design and construction",
        "Electrical system installation and maintenance",
        "Mechanical equipment installation and repair",
        "HVAC system design and implementation",
        "Plumbing and fire protection systems",
      ],
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of services to meet your industrial needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-64">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Link href={service.link}>
                  <Button className="bg-primary hover:bg-secondary text-white w-full">Learn More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-secondary text-white">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
