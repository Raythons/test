import Hero from "@/components/home/hero"
import Benefits from "@/components/home/benefits"
import Services from "@/components/home/services"
import FeaturedProducts from "@/components/home/featured-products"
import Projects from "@/components/home/projects"
import ContactCta from "@/components/home/contact-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <FeaturedProducts />
      <Projects />
      <ContactCta />
    </>
  )
}
