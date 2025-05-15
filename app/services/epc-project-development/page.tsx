import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EpcProjectDevelopmentPage() {
  const benefits = [
    "Single-point accountability for the entire project",
    "Cost savings through integrated project delivery",
    "Streamlined communication and decision-making",
    "Risk mitigation through expert planning and execution",
    "Accelerated project completion timelines",
    "Quality assurance at every project stage",
  ]

  const processSteps = [
    {
      title: "Feasibility Study & Conceptual Design",
      description:
        "We conduct comprehensive feasibility studies to assess technical, economic, and environmental viability, followed by conceptual designs that align with your business objectives.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Front-End Engineering Design (FEED)",
      description:
        "Our detailed FEED process provides accurate project scope definition, cost estimations, and implementation plans, establishing a solid foundation for project execution.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Procurement & Vendor Management",
      description:
        "We manage the entire procurement cycle, from vendor pre-qualification to material delivery, ensuring quality, timely delivery, and cost-effectiveness.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Construction Management",
      description:
        "Our experienced teams oversee all construction activities, maintaining strict adherence to quality standards, safety protocols, and project schedules.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Commissioning & Handover",
      description:
        "We ensure seamless project commissioning, thorough testing, and comprehensive training to facilitate a smooth transition to operational status.",
      image: "/placeholder.svg?height=240&width=400",
    },
  ]

  const projects = [
    {
      title: "Industrial Water Treatment Facility",
      location: "Dammam Industrial City, Saudi Arabia",
      description:
        "Complete EPC project for a 15,000 m³/day industrial water treatment facility, including design, equipment procurement, construction, and commissioning.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Oil & Gas Processing Plant",
      location: "Jubail Industrial City, Saudi Arabia",
      description:
        "Full-scale EPC services for a natural gas processing plant, including civil works, mechanical installation, electrical systems, and control interfaces.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Municipal Infrastructure Development",
      location: "Riyadh, Saudi Arabia",
      description:
        "Comprehensive EPC project for municipal infrastructure upgrades, including pipeline networks, pumping stations, and monitoring systems.",
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
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">EPC Project Development</h1>
            <p className="text-lg md:text-xl text-white/90">
              Comprehensive Engineering, Procurement, and Construction services for your most challenging industrial
              projects
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
            <span className="text-primary font-medium">EPC Project Development</span>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">End-to-End Project Excellence</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOPS Achievement, we offer comprehensive Engineering, Procurement, and Construction (EPC) services
                that streamline complex projects from conceptualization to completion. Our integrated approach ensures
                unified project management, reducing interfaces and optimizing resource allocation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We handle every aspect of your project, from initial feasibility studies and engineering designs to
                procurement of equipment and materials, construction management, and final commissioning. This
                all-inclusive approach minimizes risks, reduces costs, and ensures timely completion.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our multidisciplinary team brings together experts in various engineering disciplines, procurement
                specialists, and construction professionals to deliver projects that exceed expectations in quality,
                safety, and operational performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-2 shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="EPC Project Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our EPC Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic and proven approach to deliver successful EPC projects
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>

                <div
                  className={`relative h-60 rounded-lg overflow-hidden shadow-md ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
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
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Featured EPC Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our successful EPC projects across Saudi Arabia
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
                  <p className="text-gray-600 mb-4">{project.description}</p>
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
            <h2 className="text-3xl font-montserrat font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our expert team today to discuss your EPC project requirements and discover how we can help you
              achieve success.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Contact Our Specialists
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
