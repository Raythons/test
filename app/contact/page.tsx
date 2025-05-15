"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <>
      {/* Contact Hero */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90">
              Get in touch with our team to discuss your specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center fade-in">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">+966 123 456 789</p>
              <p className="text-gray-600">+966 123 456 790</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center fade-in delay-100">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Email</h3>
              <p className="text-gray-600 mb-2">info@tops-achievement.com</p>
              <p className="text-gray-600">support@tops-achievement.com</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center fade-in delay-200">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Address</h3>
              <p className="text-gray-600 mb-2">King Fahd Road, Al Olaya District</p>
              <p className="text-gray-600">Riyadh, Saudi Arabia</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in">
              <h2 className="text-2xl font-montserrat font-semibold text-primary mb-6">Send Us a Message</h2>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Your message has been sent successfully. We'll get back to you soon!
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                  There was an error sending your message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-secondary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="fade-in delay-300">
              <h2 className="text-2xl font-montserrat font-semibold text-primary mb-6">Our Location</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6554812552567!2d46.68511491500168!3d24.693033984134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1650123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-3">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday - Thursday</span>
                    <span className="text-gray-800 font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Friday</span>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-montserrat font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md fade-in">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  We primarily serve clients across Saudi Arabia, but we also work with clients throughout the Middle
                  East, including UAE, Qatar, Kuwait, and Bahrain.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md fade-in delay-100">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
                  Do you provide product demonstrations?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer product demonstrations for interested clients. Please contact our sales team to schedule
                  a demonstration at your facility or at our showroom.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md fade-in delay-200">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
                  What warranty do you offer on your products?
                </h3>
                <p className="text-gray-600">
                  Most of our products come with a 12-month standard warranty. Extended warranty options are available
                  for select products. Please contact us for specific warranty information.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md fade-in delay-300">
                <h3 className="text-lg font-montserrat font-semibold text-primary mb-2">
                  Do you provide training for your equipment?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive training programs for all our equipment. Training can be conducted at your
                  facility or at our training center in Riyadh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
