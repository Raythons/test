import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from the quality of our products to the service we provide to our clients.",
    },
    {
      title: "Innovation",
      description:
        "We continuously seek innovative solutions to address the evolving challenges in industrial inspection and maintenance.",
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest level of integrity, transparency, and ethical standards.",
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize our customers' needs and work closely with them to deliver solutions that exceed their expectations.",
    },
    {
      title: "Safety",
      description: "We are committed to maintaining the highest safety standards in all our operations and products.",
    },
    {
      title: "Sustainability",
      description:
        "We are dedicated to environmentally responsible practices and sustainable solutions for the future.",
    },
  ]

  const team = [
    {
      name: "Ahmed Al-Saud",
      position: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mohammed Al-Qahtani",
      position: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sara Al-Otaibi",
      position: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Khalid Al-Harbi",
      position: "Sales Director",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <>
      {/* About Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Learn about our mission, values, and the team behind TOPS Achievement
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="TOPS Achievement Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="fade-in delay-300">
              <h2 className="text-3xl font-montserrat font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TOPS Achievement was founded in 2010 with a vision to revolutionize the industrial inspection and
                maintenance sector in Saudi Arabia. What began as a small team of passionate engineers has grown into a
                leading provider of cutting-edge solutions for infrastructure assessment and maintenance.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have expanded our product range and services to meet the evolving needs of our
                clients across various industries, including oil and gas, municipal infrastructure, and manufacturing.
              </p>
              <p className="text-gray-600 mb-6">
                Today, TOPS Achievement is recognized for its commitment to quality, innovation, and customer
                satisfaction. We continue to invest in the latest technologies and training to ensure we deliver the
                best possible solutions to our clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button className="bg-primary hover:bg-secondary">Our Services</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md fade-in">
              <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide innovative and reliable inspection and maintenance solutions that help our clients optimize
                their operations, extend the lifespan of their infrastructure, and ensure safety and compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md fade-in delay-300">
              <h3 className="text-2xl font-montserrat font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of industrial inspection and maintenance solutions in the Middle East,
                recognized for our technical expertise, innovative approach, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide our decisions, actions, and interactions with clients, partners, and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead TOPS Achievement and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-montserrat font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-white/90 mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about innovation and
              excellence, we'd love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                View Career Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
