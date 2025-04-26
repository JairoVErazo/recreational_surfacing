import React from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export const metadata = {
  title: "About Us | Recreational Surfacing INC - Playground Safety Experts",
  description: "Pioneers in rubberized playground surfacing since 2003. Certified safety surfaces using eco-friendly materials. ADA compliant installations.",
  keywords: "playground safety surfacing, rubberized flooring, ADA compliant playgrounds, recycled material surfaces",
  openGraph: {
    title: "About Our Company - Recreational Surfacing INC",
    description: "Industry leaders in safe and sustainable playground surfaces installation",
    images: [
      {
        url: "/img/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Our certified playground installation team",
      }
    ],
  },
  alternates: {
    canonical: "https://recreational-surfacing.com/About",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <div itemScope itemType="https://schema.org/AboutPage">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://recreational-surfacing.com/About"
          },
          "headline": "About Recreational Surfacing INC",
          "description": "Certified playground safety surface installers serving North America since 2003",
          "image": "/img/og-about.jpg",
          "author": {
            "@type": "Organization",
            "name": "Recreational Surfacing INC",
            "logo": "/logo.png"
          },
          "datePublished": "2024-01-01",
          "award": "ASTM F1292-22 Certified"
        })}
      </script>

      <Navbar />

      <section className="bg-gray-50 py-20 mt-24" itemProp="mainContent">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold text-orange-600 mb-4" itemProp="headline">
              Recreational Surfacing INC: Redefining Safe and Fun Playgrounds
            </h1>
            <p className="text-lg text-gray-700 mb-6" itemProp="description">
              At Recreational Surfacing INC, we stand as pioneers in the
              manufacturing and installation of rubberized playground safety
              surfacing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to safety is paramount, and we achieve this by
              utilizing a blend of pre-consumer and post-consumer reclaimed
              material components. As industry innovators, we take pride in
              crafting surfaces that not only provide a cushioned and secure
              play area but also contribute to environmental sustainability.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img/img2.JPG"
              alt="Certified playground safety installation process"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
              loading="lazy"
              itemProp="image"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              src="/img/core.webp"
              alt="Visual representation of our core values"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Core Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li itemProp="itemListElement">
                <strong>Safety Paramount:</strong> Quality materials, rigorous
                standards, accessibility for all users.
              </li>
              <li itemProp="itemListElement">
                <strong>Quality:</strong> Ensuring excellence in beauty,
                durability, safety, and versatility.
              </li>
              <li itemProp="itemListElement">
                <strong>Communication:</strong> Transparent, clear, and
                responsive to client needs and concerns.
              </li>
              <li itemProp="itemListElement">
                <strong>Team Work:</strong> Expecting teamwork with our partners
                and employees.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
            Detailed Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" itemProp="hasPart">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Diverse Applications
              </h3>
              <p className="text-gray-700">
                Poured-in-place, tile, and artificial turf systems are available
                in a variety of colors for a wide array of applications.
                Recreational Surfacing INC is used at schools, parks, daycare
                centers, fitness facilities, military bases, quick-serve
                restaurants, hospitality, shopping centers, and homeowner
                playgrounds. Our porous surfaces are highly weather-resistant
                and provide customers with a virtually maintenance-free play
                surface.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" itemProp="hasPart">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Quality Materials and Installation
              </h3>
              <p className="text-gray-700">
                We use the best materials so our rubber play surfaces are clean,
                safe, and made to last. Our experienced installers know how to
                make a rubber playground safety surface come alive! Our quality
                installations last. Our work is done fast, right, and on budget.
                Customers appreciate our friendly service and helpful support -
                before, during, and after installation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg" itemProp="hasPart">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                Seamless Project Management
              </h3>
              <p className="text-gray-700">
                Recreational Surfacing INC excels in project management by
                staying on top of every detail from bid and specification
                through construction and closeout to carefully adhering to
                schedules and budgets. We confidently guarantee our work because
                it's our own people who deliver the quality product and service.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  );
}