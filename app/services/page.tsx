import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Inspection Services",
      description:
        "Our comprehensive inspection services utilize advanced technology to assess the condition of pipelines, tanks, and industrial infrastructure. We provide detailed reports with actionable insights to help you make informed decisions about maintenance and repairs.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/inspection",
      features: [
        "Pipeline inspection using robotic cameras",
        "Tank and vessel internal inspection",
        "Infrastructure condition assessment",
        "Detailed reporting with video and images",
        "Non-destructive testing",
      ],
    },
    {
      title: "Maintenance Solutions",
      description:
        "Keep your equipment and infrastructure in optimal condition with our preventive and corrective maintenance solutions. Our experienced technicians use industry-leading practices to minimize downtime and extend the lifespan of your assets.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/maintenance",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Equipment calibration and testing",
        "Performance optimization",
        "Maintenance planning and scheduling",
      ],
    },
    {
      title: "Technical Support",
      description:
        "Our technical support team provides expert assistance for all your inspection and maintenance equipment. From troubleshooting to software updates, we ensure your systems operate at peak performance.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/technical-support",
      features: [
        "24/7 emergency support",
        "Remote diagnostics and troubleshooting",
        "Software updates and upgrades",
        "Equipment repair and replacement",
        "Technical consultation",
      ],
    },
    {
      title: "Training",
      description:
        "Empower your team with the knowledge and skills needed to effectively operate and maintain inspection equipment. Our training programs are tailored to your specific needs and equipment.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/services/training",
      features: [
        "Equipment operation training",
        "Maintenance best practices",
        "Safety procedures and protocols",
        "Advanced inspection techniques",
        "Customized training programs",
      ],
    },
  ]

  return (
    <>
      {/* Services Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive inspection and maintenance solutions for industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`fade-in ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`fade-in ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary mt-1 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link}>
                    <Button className="bg-primary hover:bg-secondary">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">Ready to Elevate Your Operations?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team today to discuss your specific requirements and discover how our services can benefit
              your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-primary">
                Contact Our Specialists
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
