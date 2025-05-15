import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactCta() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl font-montserrat font-bold mb-6">Ready to Elevate Your Inspection Capabilities?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our team today to discuss your specific requirements and discover how our solutions can benefit your
            operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
