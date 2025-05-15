import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CivilElectricalMechanicalPage() {
  const services = [
    {
      title: "Civil Engineering Services",
      description:
        "Comprehensive civil engineering solutions including structural design, construction management, foundation engineering, and infrastructure development.",
      features: [
        "Structural design and analysis",
        "Construction supervision and management",
        "Foundation design and geotechnical engineering",
        "Infrastructure planning and development",
        "Site assessment and feasibility studies",
        "Quality control and compliance monitoring",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Electrical Engineering Services",
      description:
        "End-to-end electrical engineering services covering power distribution, control systems, lighting design, and telecommunications infrastructure.",
      features: [
        "Power distribution and transmission systems",
        "Control system design and integration",
        "Lighting design and energy optimization",
        "Telecommunications and data infrastructure",
        "Instrumentation and automation",
        "Electrical safety and compliance",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Mechanical Engineering Services",
      description:
        "Specialized mechanical engineering expertise for HVAC systems, piping design, equipment installation, and process optimization.",
      features: [
        "HVAC system design and optimization",
        "Piping and pipeline engineering",
        "Pump and compressor systems",
        "Mechanical equipment installation",
        "Process optimization and efficiency",
        "Preventive maintenance programs",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const projects = [
    {
      title: "Industrial Manufacturing Facility",
      location: "Jubail, Saudi Arabia",
      description:
        "Comprehensive civil, electrical, and mechanical works for a new manufacturing facility, including structural design, power distribution, and HVAC systems.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Commercial Complex Renovation",
      location: "Riyadh, Saudi Arabia",
      description:
        "Complete renovation and upgrade of electrical and mechanical systems in a major commercial complex, improving energy efficiency and operational performance.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Water Treatment Plant",
      location: "Dammam, Saudi Arabia",
      description:
        "Design and implementation of civil structures, electrical controls, and mechanical systems for a municipal water treatment facility.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Service Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Civil, Electrical & Mechanical Works
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive engineering solutions for industrial and commercial applications
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">Civil, Electrical & Mechanical Works</span>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">Integrated Engineering Solutions</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              TOPS Achievement offers comprehensive civil, electrical, and mechanical engineering services that work
              together seamlessly to deliver complete solutions for your infrastructure and facility needs. Our
              multidisciplinary approach ensures that all aspects of your project are handled with expertise and
              precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
              <div className="p-1 bg-primary"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">Integrated Approach</h3>
                <p className="text-gray-700">
                  Our multidisciplinary teams work together to deliver cohesive solutions that address all aspects of
                  your project, ensuring seamless integration between civil, electrical, and mechanical systems.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
              <div className="p-1 bg-primary"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">Technical Excellence</h3>
                <p className="text-gray-700">
                  Our engineers bring specialized expertise and industry knowledge to every project, applying the latest
                  technologies and best practices to deliver superior results.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-full">
              <div className="p-1 bg-primary"></div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">Quality & Compliance</h3>
                <p className="text-gray-700">
                  We maintain rigorous quality control processes and ensure full compliance with regulatory standards
                  and industry specifications in all our engineering works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our Engineering Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of civil, electrical, and mechanical engineering services
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-secondary text-white">Request Consultation</Button>
                  </Link>
                </div>

                <div
                  className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Examples of our civil, electrical, and mechanical engineering expertise in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">Engineering Excellence for Your Projects</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our team of specialized engineers to discuss how our civil, electrical, and mechanical services
              can support your next project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
