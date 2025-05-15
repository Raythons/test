import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OperationMaintenancePage() {
  const benefits = [
    "Reduced downtime and increased operational efficiency",
    "Extended equipment lifespan and improved reliability",
    "Lower maintenance costs through preventive strategies",
    "Enhanced safety and regulatory compliance",
    "Optimized performance of critical systems",
    "Rapid response to emergency maintenance needs",
  ]

  const services = [
    {
      title: "Preventive Maintenance",
      description:
        "Scheduled maintenance activities to prevent equipment failure and extend asset lifespan, including inspections, cleaning, lubrication, and parts replacement.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Corrective Maintenance",
      description:
        "Swift identification and resolution of equipment failures or malfunctions to minimize downtime and restore operational capabilities.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Predictive Maintenance",
      description:
        "Advanced condition monitoring and predictive analytics to identify potential issues before they lead to failure, optimizing maintenance schedules and resource allocation.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Emergency Response",
      description:
        "24/7 emergency maintenance services with rapid response times to address critical failures and minimize operational disruptions.",
      image: "/placeholder.svg?height=240&width=400",
    },
    {
      title: "Performance Optimization",
      description:
        "Continuous improvement of equipment and system performance through fine-tuning, upgrades, and implementation of best practices.",
      image: "/placeholder.svg?height=240&width=400",
    },
  ]

  const caseStudies = [
    {
      title: "Municipal Water Network",
      location: "Al Khobar, Saudi Arabia",
      description:
        "Comprehensive maintenance program for a municipal water distribution network, reducing leakage by 35% and extending infrastructure lifespan.",
      image: "/placeholder.svg?height=400&width=600",
      results: [
        "35% reduction in water leakage",
        "42% decrease in emergency repairs",
        "Improved water quality compliance",
      ],
    },
    {
      title: "Industrial Manufacturing Facility",
      location: "Jeddah, Saudi Arabia",
      description:
        "Integrated operation and maintenance services for a large manufacturing facility, improving equipment uptime and production efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      results: ["23% increase in equipment uptime", "18% reduction in maintenance costs", "Zero safety incidents"],
    },
    {
      title: "Commercial Building Systems",
      location: "Riyadh, Saudi Arabia",
      description:
        "Complete O&M program for HVAC, electrical, and plumbing systems in a 30-story commercial tower, optimizing energy usage and tenant satisfaction.",
      image: "/placeholder.svg?height=400&width=600",
      results: [
        "21% energy consumption reduction",
        "40% faster response to tenant requests",
        "Extended equipment lifespan",
      ],
    },
  ]

  return (
    <>
      {/* Service Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Operation & Maintenance</h1>
            <p className="text-lg md:text-xl text-white/90">
              Professional operation and maintenance services to maximize equipment reliability and operational
              efficiency
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
            <span className="text-primary font-medium">Operation & Maintenance</span>
          </div>
        </div>
      </div>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Operation and Maintenance Services"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">
                Maximizing Asset Performance and Reliability
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                TOPS Achievement delivers comprehensive operation and maintenance services designed to optimize the
                performance, reliability, and lifespan of your equipment and infrastructure. Our professional teams
                combine technical expertise with industry best practices to ensure your operations run smoothly and
                efficiently.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We offer customized maintenance strategies tailored to your specific needs, whether it's routine
                preventive maintenance, condition-based maintenance, or emergency repair services. Our goal is to
                minimize downtime, reduce lifecycle costs, and enhance operational efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With our dedicated maintenance teams and 24/7 support capabilities, we provide peace of mind that your
                critical systems are in expert hands.
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
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our O&M Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep your operations running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md h-full">
                <div className="relative h-40 rounded-lg overflow-hidden mb-6">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world examples of our successful maintenance programs
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-montserrat font-semibold text-primary mb-2">{study.title}</h3>
                  <p className="text-gray-500 mb-4">{study.location}</p>
                  <p className="text-gray-700 mb-6">{study.description}</p>

                  <h4 className="text-lg font-medium text-gray-800 mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold mb-6">Optimize Your Operations</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today to discuss how our operation and maintenance services can enhance your equipment
              reliability and operational efficiency.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
