import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Pipeline Inspection Project",
      location: "Riyadh, Saudi Arabia",
      description: "Comprehensive inspection of 50km of municipal water pipelines using advanced robotic technology.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/pipeline-inspection",
    },
    {
      title: "Industrial Facility Maintenance",
      location: "Jeddah, Saudi Arabia",
      description: "Preventive maintenance program for a major industrial facility, ensuring operational continuity.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/industrial-maintenance",
    },
    {
      title: "Infrastructure Assessment",
      location: "Dammam, Saudi Arabia",
      description: "Detailed assessment of critical infrastructure using state-of-the-art inspection equipment.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/infrastructure-assessment",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how our solutions have helped clients across Saudi Arabia solve complex inspection and maintenance
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden smooth-transform hover:shadow-lg hover:-translate-y-1 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={project.link}>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button size="lg" className="bg-primary hover:bg-secondary">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
