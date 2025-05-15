import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Pipeline Inspection Project",
      location: "Riyadh, Saudi Arabia",
      date: "January 2023",
      description:
        "Comprehensive inspection of 50km of municipal water pipelines using advanced robotic technology. The project identified critical areas requiring maintenance and helped the municipality prioritize repairs.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/pipeline-inspection",
      category: "Inspection",
    },
    {
      title: "Industrial Facility Maintenance",
      location: "Jeddah, Saudi Arabia",
      date: "March 2023",
      description:
        "Implementation of a preventive maintenance program for a major industrial facility, ensuring operational continuity and reducing downtime by 35%. The program included regular inspections and scheduled maintenance activities.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/industrial-maintenance",
      category: "Maintenance",
    },
    {
      title: "Infrastructure Assessment",
      location: "Dammam, Saudi Arabia",
      date: "May 2023",
      description:
        "Detailed assessment of critical infrastructure using state-of-the-art inspection equipment. The project provided valuable data for future expansion plans and identified potential safety concerns.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/infrastructure-assessment",
      category: "Assessment",
    },
    {
      title: "Sewer Rehabilitation Project",
      location: "Al Khobar, Saudi Arabia",
      date: "July 2023",
      description:
        "Rehabilitation of 15km of aging sewer lines using trenchless technology. The project minimized disruption to the community while extending the lifespan of the infrastructure by an estimated 30 years.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/sewer-rehabilitation",
      category: "Rehabilitation",
    },
    {
      title: "Oil Refinery Inspection",
      location: "Yanbu, Saudi Arabia",
      date: "September 2023",
      description:
        "Comprehensive inspection of critical components at a major oil refinery. The project utilized advanced videoscope technology to access hard-to-reach areas and identify potential issues before they caused failures.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/refinery-inspection",
      category: "Inspection",
    },
    {
      title: "Municipal Training Program",
      location: "Medina, Saudi Arabia",
      date: "November 2023",
      description:
        "Development and delivery of a comprehensive training program for municipal workers on the operation and maintenance of inspection equipment. The program enhanced the municipality's self-sufficiency in managing its infrastructure.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/municipal-training",
      category: "Training",
    },
  ]

  return (
    <>
      {/* Projects Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Our Projects</h1>
            <p className="text-lg md:text-xl text-white/90">
              Discover how our solutions have helped clients across Saudi Arabia solve complex inspection and
              maintenance challenges
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden smooth-transform hover:shadow-lg hover:-translate-y-1 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-primary mb-2">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-3">{project.location}</span>
                    <span>{project.date}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link href={project.link}>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                      View Project
                    </Button>
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
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team today to discuss your specific requirements and discover how our solutions can benefit
              your operations.
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
